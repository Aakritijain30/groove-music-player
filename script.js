const PLAYLIST = [
  { title: "Dusk Till Dawn",      artist: "ZAYN, Sia",                             duration: "4:00", color: "#e8c840", src: "audio/dusk.mp3" },
  { title: "Closer",              artist: "The Chainsmokers",                      duration: "4:05", color: "#264F37", src: "audio/closer.mp3"},
  { title: "Counting Stars",      artist: "OneRepublic",                           duration: "4:17", color: "#ff6b35", src: "audio/counting_stars.mp3" },
  { title: "Stitches",            artist: "Shawn Mendes",                          duration: "3:28", color: "#ff5e3a", src: "audio/stitches.mp3" },
  { title: "Sunflower-Spider-Man: Into the Spider-Verse", 
                                  artist: "Post Malone, Swae Lee",                 duration: "2:38", color: "#ffcc00", src: "audio/sunflower.mp3" },
  { title: "No Lie",              artist: "Sean Paul, Dua Lipa",                   duration: "3:31", color: "#5ec4ff", src: "audio/nolie.mp3" },
  { title: "Night Changes",       artist: "One Direction",                         duration: "3:52", color: "#b67fff", src: "audio/nightchanges.mp3" },
  { title: "Perfect",             artist: "Ed Sheeran",                            duration: "4:23", color: "#ffa040", src: "audio/perfect.mp3" },
  { title: "I Wanna Be Yours",    artist: "Arctic Monkeys",                        duration: "3:03", color: "#40ffb4", src: "audio/iwannabe.mp3" },
  { title: "Hey Mama",            artist: "David Guetta, Nicki Minaj, Bebe Rexha", duration: "3:41", color: "#ff85c0", src: "audio/heymama.mp3" },
  { title: "Die With A Smile",    artist: "Lady Gaga, Bruno Mars",                 duration: "4:11", color: "#c084fc", src: "audio/diewith.mp3" },
  { title: "Make You Mine",       artist: "PUBLIC",                                duration: "3:56", color: "#264F73", src: "audio/makeyoumine.mp3" },
];

let currentIndex = 0;
let isPlaying    = false;
let shuffleOn    = false;
let repeatOn     = true;

const audio        = document.getElementById('audioEl');
const vinyl        = document.getElementById('vinyl');
const tonearm      = document.getElementById('tonearm');
const vinylLabel   = document.getElementById('vinylLabel');
const songTitle    = document.getElementById('songTitle');
const songArtist   = document.getElementById('songArtist');
const progressFill = document.getElementById('progressFill');
const progressTrack= document.getElementById('progressTrack');
const timeElapsed  = document.getElementById('timeElapsed');
const timeDuration = document.getElementById('timeDuration');
const iconPlay     = document.getElementById('iconPlay');
const iconPause    = document.getElementById('iconPause');
const btnPlay      = document.getElementById('btnPlay');
const loadingBar   = document.getElementById('loadingBar');
const volSlider    = document.getElementById('volumeSlider');
const volPct       = document.getElementById('volumePct');

function fmt(sec) {
  if (isNaN(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}
function buildPlaylist() {
  const list = document.getElementById('playlistList');
  list.innerHTML = '';

  PLAYLIST.forEach(function (track, i) {
    const el = document.createElement('div');
    el.className = 'track' +
      (i === currentIndex ? ' active' + (isPlaying ? '' : ' paused') : '');

    el.innerHTML =
      '<div class="track-num">' + (i + 1) + '</div>' +
      '<div class="track-eq">' +
        '<div class="eq-bar"></div>' +
        '<div class="eq-bar"></div>' +
        '<div class="eq-bar"></div>' +
      '</div>' +
      '<div class="track-info">' +
        '<div class="track-name">' + track.title + '</div>' +
        '<div class="track-artist">' + track.artist + '</div>' +
      '</div>' +
      '<div class="track-duration">' + track.duration + '</div>';

    el.addEventListener('click', function () { loadAndPlay(i); });
    list.appendChild(el);
  });
}

function loadTrack(index) {
  currentIndex = index;
  const track  = PLAYLIST[index];


  songTitle.textContent = track.title;
  songArtist.textContent = track.artist;
  timeDuration.textContent = track.duration;
  vinylLabel.style.background = track.color;
  btnPlay.style.boxShadow = '0 4px 20px ' + track.color + '66';
  progressFill.style.width = '0%';
  timeElapsed.textContent  = '0:00';

  loadingBar.classList.add('show');
  audio.src = track.src;
  audio.load();

  buildPlaylist();
}


function loadAndPlay(index) {
  isPlaying = false;
  loadTrack(index);
  audio.play().catch(function (e) { console.error('Play error:', e); });
}

function togglePlay() {
  if (!audio.src) { loadAndPlay(currentIndex); return; }
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play().catch(function (e) { console.error('Play error:', e); });
  }
}

audio.addEventListener('canplay', function () {
  loadingBar.classList.remove('show');
});

audio.addEventListener('play', function () {
  isPlaying = true;
  vinyl.classList.add('spinning');
  tonearm.classList.add('playing');
  iconPlay.style.display  = 'none';
  iconPause.style.display = 'block';
  buildPlaylist();
});

audio.addEventListener('pause', function () {
  isPlaying = false;
  vinyl.classList.remove('spinning');
  tonearm.classList.remove('playing');
  iconPlay.style.display  = 'block';
  iconPause.style.display = 'none';
  buildPlaylist();
});

audio.addEventListener('timeupdate', function () {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width    = pct + '%';
  timeElapsed.textContent     = fmt(audio.currentTime);
  timeDuration.textContent    = fmt(audio.duration);
});

audio.addEventListener('ended', function () {
  if (repeatOn) {
    audio.currentTime = 0;
    audio.play();
  } else {
    const next = shuffleOn
      ? Math.floor(Math.random() * PLAYLIST.length)
      : (currentIndex + 1) % PLAYLIST.length;
    loadAndPlay(next);
  }
});

btnPlay.addEventListener('click', togglePlay);

document.getElementById('btnNext').addEventListener('click', function () {
  const next = shuffleOn
    ? Math.floor(Math.random() * PLAYLIST.length)
    : (currentIndex + 1) % PLAYLIST.length;
  loadAndPlay(next);
});

document.getElementById('btnPrev').addEventListener('click', function () {
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  const prev = (currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
  loadAndPlay(prev);
});

progressTrack.addEventListener('click', function (e) {
  if (!audio.duration) return;
  const rect = progressTrack.getBoundingClientRect();
  audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
});

audio.volume = 0.75;
volSlider.addEventListener('input', function () {
  audio.volume = volSlider.value / 100;
  volPct.textContent = volSlider.value + '%';
});
document.getElementById('tagShuffle').addEventListener('click', function () {
  shuffleOn = !shuffleOn;
  this.classList.toggle('on', shuffleOn);
});

document.getElementById('tagRepeat').addEventListener('click', function () {
  repeatOn = !repeatOn;
  this.classList.toggle('on', repeatOn);
});

const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');

searchInput.addEventListener('input', function () {
  const query = this.value.trim().toLowerCase();
  const tracks = document.querySelectorAll('#playlistList .track');
  let visibleCount = 0;

  searchClear.classList.toggle('visible', query.length > 0);

  const old = document.querySelector('.no-results');
  if (old) old.remove();

  tracks.forEach(function (el, i) {
    const title  = PLAYLIST[i].title.toLowerCase();
    const artist = PLAYLIST[i].artist.toLowerCase();
    const match  = title.includes(query) || artist.includes(query);
    el.classList.toggle('hidden', !match);
    if (match) visibleCount++;
  });

  if (visibleCount === 0 && query.length > 0) {
    const msg = document.createElement('div');
    msg.className = 'no-results';
    msg.textContent = 'No songs found 🎵';
    document.getElementById('playlistList').appendChild(msg);
  }
});

searchClear.addEventListener('click', function () {
  searchInput.value = '';
  searchInput.dispatchEvent(new Event('input'));
  searchInput.focus();
});

// ── KEYBOARD CONTROLS ──
document.addEventListener('keydown', function (e) {

  // Search bar mein type kar rahe ho toh kaam mat karo
  if (document.activeElement === searchInput) return;

  switch (e.code) {

    case 'Space':
      e.preventDefault(); // page scroll rokna
      togglePlay();
      break;

    case 'ArrowRight':
      e.preventDefault();
      // Next song
      var next = shuffleOn
        ? Math.floor(Math.random() * PLAYLIST.length)
        : (currentIndex + 1) % PLAYLIST.length;
      loadAndPlay(next);
      break;

    case 'ArrowLeft':
      e.preventDefault();
      // Previous song
      if (audio.currentTime > 3) { audio.currentTime = 0; }
      else {
        var prev = (currentIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
        loadAndPlay(prev);
      }
      break;

    case 'ArrowUp':
      e.preventDefault();
      // Volume up
      audio.volume = Math.min(1, audio.volume + 0.1);
      volSlider.value = Math.round(audio.volume * 100);
      volPct.textContent = volSlider.value + '%';
      break;

    case 'ArrowDown':
      e.preventDefault();
      // Volume down
      audio.volume = Math.max(0, audio.volume - 0.1);
      volSlider.value = Math.round(audio.volume * 100);
      volPct.textContent = volSlider.value + '%';
      break;
  }
});

document.getElementById('trackCount').textContent = PLAYLIST.length;
loadTrack(0);
buildPlaylist();
