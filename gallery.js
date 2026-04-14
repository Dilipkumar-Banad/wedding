let current = 0;
const images = document.querySelectorAll(".gallery img");

setInterval(() => {
  images.forEach(img => img.style.display = "none");
  current = (current + 1) % images.length;
  images[current].style.display = "block";
}, 3000);