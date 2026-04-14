let current = 0;

window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  if (images.length === 0) return;

  images.forEach((img, index) => {
    img.style.display = index === 0 ? "block" : "none";
  });

  setInterval(() => {
    images.forEach(img => img.style.display = "none");
    current = (current + 1) % images.length;
    images[current].style.display = "block";
  }, 3000);
});