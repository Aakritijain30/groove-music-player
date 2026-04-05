const PLAYLIST1 = [
  { title: "Dusk Till Dawn",      artist: "ZAYN, Sia",                             duration: "4:00", color: "#e8c840", src: "audio/dusk.mp3" },
  { title: "Closer",              artist: "The Chainsmokers",                      duration: "4:05", color: "#264F37", src: "audio/closer.mp3"},
  { title: "Counting Stars",      artist: "OneRepublic",                           duration: "4:17", color: "#ff6b35", src: "audio/counting_stars.mp3" },
  { title: "Stitches",            artist: "Shawn Mendes",                          duration: "3:28", color: "#ff5e3a", src: "audio/stitches.mp3" },
  { title: "Sunflower-SpiderMan", artist: "Post Malone, Swae Lee",                 duration: "2:38", color: "#ffcc00", src: "audio/sunflower.mp3" },
  { title: "No Lie",              artist: "Sean Paul, Dua Lipa",                   duration: "3:31", color: "#5ec4ff", src: "audio/nolie.mp3" },
  { title: "Night Changes",       artist: "One Direction",                         duration: "3:52", color: "#b67fff", src: "audio/nightchanges.mp3" },
  { title: "Perfect",             artist: "Ed Sheeran",                            duration: "4:23", color: "#ffa040", src: "audio/perfect.mp3" },
  { title: "I Wanna Be Yours",    artist: "Arctic Monkeys",                        duration: "3:03", color: "#40ffb4", src: "audio/iwannabe.mp3" },
  { title: "Hey Mama",            artist: "David Guetta, Nicki Minaj, Bebe Rexha", duration: "3:41", color: "#ff85c0", src: "audio/heymama.mp3" },
  { title: "Die With A Smile",    artist: "Lady Gaga, Bruno Mars",                 duration: "4:11", color: "#c084fc", src: "audio/diewith.mp3" },
  { title: "Make You Mine",       artist: "PUBLIC",                                duration: "3:56", color: "#264F73", src: "audio/makeyoumine.mp3" },
];
const PLAYLIST2 = [
  { title: "Bairan",              artist: "Banjaare",                              duration: "2:29", color: "#e8c840", src: "audio/Banjaare_-_Bairan_Lyrics_48KBPS.mp3" },
  { title: "Jhol",                artist: "Maanu, Annural Khalid",                 duration: "4:23", color: "#c084fc", src: "audio/Maanu_Annural_Khalid_-_Jhol_Lyrics_48KBPS.mp3" },
  { title: "Darkhaast",           artist: "Arijit Singh & Sunidhi Chauhan",        duration: "6:15", color: "#264F37", src: "audio/Arijit_Singh_-_Darkhaast_Lyrics_Ft._Sunidhi_Chauhan_Shivaay_48kbps.mp3"},
  { title: "Nazm Nazm",           artist: "Arko",                                  duration: "3:43", color: "#ff6b35", src: "audio/Nazm_Nazm_Lyrics_Bareilly_Ki_Barfi_Kriti_Sanon_Arko_Ayushmann_Khurrana_Rajkummar_Rao._48KBPS.mp3" },
  { title: "Tera Deedar Hua",     artist: "Pritam, Rahat Fateh Ali Khan",          duration: "5:51", color: "#ff5e3a", src: "audio/Tera_Deedar_Hua_-_Lyrical_Song_Emraan_Hashmi_Esha_Jannat_2_Javed_Ali_Rahat_Fateh_Ali_Khan_48kbps.mp3" },
  { title: "Rabba",               artist: "Mohit Chauhan",                         duration: "4:54", color: "#ffcc00", src: "audio/Heropanti_Rabba_Full_Audio_Song_Mohit_Chauhan_Tiger_Shroff_Kriti_Sanon_48kbps.mp3" },
  { title: "Sajni",               artist: "Arijit Singh, Ram Sampath",             duration: "2:47", color: "#5ec4ff", src: "audio/Sajni_-_Arijit_Singh_-_Lyrics_-_Lapata_ladies_48KBPS.mp3" },
  { title: "Mere Sohneya",        artist: "Parampara Thakur, Sachet Tandon",       duration: "3:14", color: "#b67fff", src: "audio/Mere_Sohneya_Song_Lyrics_Kabir_Singh_Movie_Song_Parampara_Thakur_Sachet_Tandon_48KBPS.mp3" },
  { title: "Kasturi",             artist: "Arijit Singh",                          duration: "4:01", color: "#ffa040", src: "audio/Kasturi_Amar_Prem_Ki_Prem_Kahani_Arijit_Singh_Prasad_S_Jio_Cinema_48kbps.mp3" },
  { title: "Sang Rahiyo",         artist: "Jasleen Royal",                         duration: "3:03", color: "#40ffb4", src: "audio/Sang_Rahiyo_Official_Video_Jasleen_Royal_ft__Ranveer_Allahbadia_Ujjwal_Kashyap_Neeraj_Rajawat_48KBPS.mp3" },
  { title: "Jaan Ban Gaye",       artist: "Mithoon, Vishal Mishra, Asees Kaur",    duration: "3:31", color: "#ff85c0", src: "audio/Jaan_Ban_Gaye_Lyrics_Khuda_Haafiz_Vidyut_Jammwal_Shivaleeka_O_Mithoon_Vishal_M_Asees_K_48KBPS.mp3" },
  { title: "Malang Sajna",        artist: "Sachet Tandon, Parampara Tandon",       duration: "2:37", color: "#264F73", src: "audio/Malang_Sajna_Video_Sachet_Tandon_Parampara_Tandon_Adil_Shaikh_Kumaar_Bhushan_Kumar_48kbps.mp3" },
  { title: "Tainu Khabar Nahi",   artist: "Arijit Singh",                          duration: "3:16", color: "#e8c840", src: "audio/Tainu_Khabar_Nahi_-_Arijit_Singh_Munjya_Sharvari_Abhay_Verma_Sachin-Jigar_Amitabh_B_Lyrical_48KBPS.mp3" },
  { title: "Tum Se",              artist: "Sachin-Jigar, Raghav, Varun Jain",      duration: "4:21", color: "#264F37", src: "audio/Tum_Se_Full_Video_Shahid_Kapoor_Kriti_Sachin-Jigar_Raghav_Chaitanya_Varun_Jain_Indraneel_48kbps.mp3"},
  { title: "Khoobsurat",          artist: "Vishal Mishra, Sachin-Jigar",           duration: "4:04", color: "#ffcc00", src: "audio/Khoobsurat_Lyrics_-_Stree_2_Sachin-Jigar_Vishal_Mishra_48kbps.mp3" },
  { title: "Apna Bana Le",        artist: "Sachin-J, Arijit S",                    duration: "4:21", color: "#5ec4ff", src: "audio/Apna_Bana_Le_-_Bhediya_Official_Lyrics_Video_Varun_Dhawan_Kriti_S_Sachin-J_Arijit_S_Amitabh_B_48kbps.mp3" },
  { title: "O Saathi",            artist: "Atif Aslam",                            duration: "4:10", color: "#b67fff", src: "audio/Atif_Aslam_-_O_Saathi_Lyrics_48KBPS.mp3" },
  { title: "Jag Ghoomeya",        artist: "Rahat Fateh Ali Khan",                  duration: "4:34", color: "#ffa040", src: "audio/Lyrical_Jag_Ghoomeya_Song_with_Lyrics_Sultan_Salman_Anushka_Vishal_Shekhar_Irshad_Kamil_48kbps.mp3" },
  { title: "Tere Sang Yaara",     artist: "Atif Aslam",                            duration: "4:42", color: "#40ffb4", src: "audio/Tere_sang_yaara_Lyrics_-_Atif_Aslam_48kbps.mp3" },
  { title: "Kesariya",            artist: "Arijit Singh",                          duration: "4:25", color: "#ff85c0", src: "audio/Kesariya_Lyrics_Full_Song_-_Brahmastra_Arijit_Singh_Kesariya_Tera_Ishq_Hai_Piya_48kbps.mp3" },
  { title: "leja",                artist: "Jai Dhir",                              duration: "3:18", color: "#264F73", src: "audio/Leja_-_Lost_Stories_JAI_DHIR_48kbps.mp3" },
  { title: "Jogi",                artist: "Yasser Desai, Aakanksha Sharma",        duration: "4:24", color: "#e8c840", src: "audio/Jogi_Shaadi_Mein_Zaroor_Aana_-Yasser_Desai_Aakanksha_Sharma_Lyrics_HD_48KBPS.mp3" },
  { title: "Sahiba",              artist: "Jasleen Royal & Stebin Ben",            duration: "3:36", color: "#264F37", src: "audio/Jasleen_Royal_Stebin_Ben_-_Sahiba_Lyrics_Vijay_Deverakonda_Radhika_Madan_48kbps.mp3"},
  { title: "Chaap Tilak",         artist: "Nakash Aziz",                           duration: "2:39", color: "#ff5e3a", src: "audio/Chaap_Tilak_From_Dark_7_White_48KBPS.mp3" },
  { title: "Be Intehaan",         artist: "Atif Aslam",                            duration: "4:40", color: "#ffcc00", src: "audio/Be_Intehaan_-_Atif_Aslam_lyrics_video_48kbps.mp3" },
  { title: "Haseen",              artist: "Talwiinder",                            duration: "2:54", color: "#5ec4ff", src: "audio/HASEEN_-_TALWIINDER_NDS_RIPPY_Official_Visualizer_48kbps.mp3" },
  { title: "Wishes",              artist: "Hasan Raheem & Talwiinder",             duration: "3:38", color: "#ffa040", src: "audio/Hasan_Raheem_-_Wishes_ft_Talwiinder_Prod_by_Umair_Official_Lyric_Video_48kbps.mp3" },
  { title: "GF BF",               artist: "Gurinder Seagal, Jacqueline Fernandez", duration: "4:03", color: "#ffa040", src: "audio/GF_BF_Lyrics_-_Ft__gurinder_seagal_i_wanna_take_you_up_and_down_round_and_round_lyrics_48KBPS.mp3" },
  { title: "Finding Her",         artist: "Kushagra Thakur",                       duration: "3:27", color: "#40ffb4", src: "audio/Kushagra_-_Finding_Her_Lyrics_48kbps.mp3" },
  { title: "Qaafirana",           artist: "Arijit Singh, Nikhita Gandhi",          duration: "5:41", color: "#ff85c0", src: "audio/Qaafirana_Lyrical_Kedarnath_Arijit_Singh_Nikhital_Sushant_S_Rajput_Sara_Ali_Khan___48kbps.mp3" },
  { title: "Pal Pal",             artist: "Talwiinder",                            duration: "3:28", color: "#c084fc", src: "audio/Afusic_-_Pal_Pal_with_Talwiinder_Official_Visualiser_Prod__AliSoomroMusic_48kbps.mp3" },
  { title: "Maiyya Mainu",        artist: "Sachet–Parampara",                      duration: "3:56", color: "#264F73", src: "audio/Maiyya_Mainu_Song_Full_Video_Jersey_Shahid_Kapoor_Mrunal_Thakur_Maiyya_Mainu_Yaad_Aave_128KBPS.mp3" },

];

let activePlaylist = 1;
let PLAYLIST = PLAYLIST1;
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
// ── TAB SWITCH ──
function switchTab(num) {
  activePlaylist = num;
  PLAYLIST = num === 1 ? PLAYLIST1 : PLAYLIST2;
  currentIndex = 0;
  isPlaying = false;
  audio.pause();
  audio.src = '';

  // UI update
  document.getElementById('tab1').classList.toggle('active', num === 1);
  document.getElementById('tab2').classList.toggle('active', num === 2);
  document.getElementById('playlistTitle').textContent = num === 1 ? 'English Vibes' : 'Hindi Romance';
  document.getElementById('trackCount').textContent = PLAYLIST.length;

  vinyl.classList.remove('spinning');
  tonearm.classList.remove('playing');
  iconPlay.style.display = 'block';
  iconPause.style.display = 'none';

  if (PLAYLIST.length > 0) {
    loadTrack(0);
  } else {
    songTitle.textContent = 'No songs yet';
    
    document.getElementById('playlistList').innerHTML =
      '<div class="no-results">No songs in this playlist yet 🎵</div>';
  }
  buildPlaylist();
}
document.getElementById('trackCount').textContent = PLAYLIST.length;
loadTrack(0);
buildPlaylist();
