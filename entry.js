function start() {
  let entry = document.getElementById("entry");

  entry.style.opacity = "0";
  entry.style.transition = "2s";

  setTimeout(() => {
    entry.style.display = "none";
  }, 2000);

  let music = document.getElementById("music");
  let musicBtn = document.getElementById("musicBtn");
  if (music) {
    music.volume = 0.3;
    music.play().then(() => {
      if (typeof playing !== 'undefined') {
        playing = true;
      }
      if (musicBtn) {
        musicBtn.innerText = "🎵";
      }
    }).catch(() => {
      // autoplay may be blocked until user interacts again
    });
  }
}