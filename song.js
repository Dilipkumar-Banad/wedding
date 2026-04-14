let music;
let btn;
let playing = false;

window.addEventListener('DOMContentLoaded', () => {
  music = document.getElementById("music");
  btn = document.getElementById("musicBtn");
});

function toggleMusic() {
  if (playing) {
    music.pause();
    if (btn) btn.innerText = "🔇";
  } else {
    music.play().then(() => {
      if (btn) btn.innerText = "🔊";
    }).catch(() => {
      // user interaction required
    });
  }

  playing = !playing;
}