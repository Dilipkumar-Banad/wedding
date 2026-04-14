let music = document.getElementById("music");
let btn = document.getElementById("musicBtn");
let playing = false;

function start() {
  document.getElementById("entry").style.display = "none";
  music.play().then(() => {
    playing = true;
    btn.innerHTML = "🔊";
  }).catch(() => {});
}

function toggleMusic() {
  if (playing) {
    music.pause();
    btn.innerHTML = "🔇";
  } else {
    music.play();
    btn.innerHTML = "🔊";
  }
  playing = !playing;
}