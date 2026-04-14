function start() {
  let entry = document.getElementById("entry");

  entry.style.opacity = "0";
  entry.style.transition = "1s";

  setTimeout(() => {
    entry.style.display = "none";
  }, 1000);

  let music = document.getElementById("music");
  music.volume = 0.3;
  music.play();
}