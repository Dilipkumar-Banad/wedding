let music;
let btn;
let video;
let playing = false;
let musicWasPlayingBeforeVideo = false;

window.addEventListener('DOMContentLoaded', () => {
  music = document.getElementById("music");
  btn = document.getElementById("musicBtn");
  bindVideoMusicSync();
});

function toggleMusic() {
  if (playing) {
    music.pause();
    if (btn) btn.innerText = "🔇";
  } else {
    if (video && !video.paused) {
      video.pause();
      musicWasPlayingBeforeVideo = false;
    }

    music.play().then(() => {
      if (btn) btn.innerText = "🔊";
    }).catch(() => {
      // user interaction required
    });
  }

  playing = !playing;
}

function bindVideoMusicSync() {
  video = document.getElementById("storyVideo");
  if (!video || !music) return;

  const pauseMusic = () => {
    musicWasPlayingBeforeVideo = !music.paused;
    if (!music.paused) {
      music.pause();
      if (btn) btn.innerText = "🔇";
      playing = false;
    }
  };

  const resumeMusic = () => {
    if (musicWasPlayingBeforeVideo) {
      music.play().then(() => {
        if (btn) btn.innerText = "🔊";
        playing = true;
      }).catch(() => {
        // autoplay may be blocked until user interacts again
      });
      musicWasPlayingBeforeVideo = false;
    }
  };

  video.addEventListener('play', pauseMusic);
  video.addEventListener('pause', resumeMusic);
  video.addEventListener('ended', resumeMusic);
}