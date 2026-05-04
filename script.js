// 🎵 Song list
const songs = [
  { title: "Nang Tahimik by Geiko", src: "Nang Tahimik.mp3" },
  { title: "Sol at Luna by Geiko", src: "sol at luna by geiko.mp3" },
  { title: "Anxious Heart by Geiko", src: "anxious heart (don't be tired of me).mp3" }
];

// Elements
const musicStar = document.getElementById('musicStar');
const playerBox = document.getElementById('playerBox');
const bgMusic = document.getElementById('bgMusic');
const songSelect = document.getElementById('songSelect');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dragHandle = document.getElementById('dragHandle');

let currentSong = 0;

// Load songs into dropdown
songs.forEach((song, i) => {
  const opt = document.createElement('option');
  opt.value = song.src;
  opt.textContent = song.title;
  songSelect.appendChild(opt);
});

bgMusic.src = songs[currentSong].src;

// Change song manually
songSelect.addEventListener('change', () => {
  bgMusic.src = songSelect.value;
  bgMusic.play();
  musicStar.classList.add('playing');
});

// Show / hide player box
musicStar.addEventListener('click', () => {
  playerBox.style.display = playerBox.style.display === 'block' ? 'none' : 'block';
});

// Play / pause
playBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playBtn.textContent = '⏸';
    musicStar.classList.add('playing');
  } else {
    bgMusic.pause();
    playBtn.textContent = '▶';
    musicStar.classList.remove('playing');
  }
});

// Next / Previous
nextBtn.addEventListener('click', () => {
  currentSong = (currentSong + 1) % songs.length;
  bgMusic.src = songs[currentSong].src;
  bgMusic.play();
  songSelect.selectedIndex = currentSong;
});

prevBtn.addEventListener('click', () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  bgMusic.src = songs[currentSong].src;
  bgMusic.play();
  songSelect.selectedIndex = currentSong;
});

// 🎧 Visual updates
bgMusic.addEventListener('play', () => musicStar.classList.add('playing'));
bgMusic.addEventListener('pause', () => musicStar.classList.remove('playing'));

// 🖱️ Dragging logic for player box
let offsetX, offsetY, isDragging = false;

dragHandle.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - playerBox.offsetLeft;
  offsetY = e.clientY - playerBox.offsetTop;
  document.body.style.userSelect = 'none';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  playerBox.style.left = `${e.clientX - offsetX}px`;
  playerBox.style.top = `${e.clientY - offsetY}px`;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.userSelect = '';
});

// Modal Logic (same as before)
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const modal = document.getElementById(icon.dataset.modal);
    if (modal) modal.style.display = 'block';
  });
});

document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

const vid = document.getElementById("myVideo");
  document.addEventListener("click", () => {
    vid.muted = false;
});

  // Handle form submission
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload
    alert('✅ Your message has been sent successfully!');
    contactForm.reset(); // clear the textarea after sending
  });
