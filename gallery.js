let currentGalleryIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".gallery a");
  if (slides.length === 0) return;

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === 0);
  });

  setInterval(() => {
    slides[currentGalleryIndex].classList.remove("active");
    currentGalleryIndex = (currentGalleryIndex + 1) % slides.length;
    slides[currentGalleryIndex].classList.add("active");
  }, 3000);
});