/* HIDE/SHOW NAVBAR */
let prevScroll = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (!navbar) return;

  if (prevScroll > currentScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-70px";
  }

  prevScroll = currentScroll;
});

/* ACTIVE LINK ON CLICK */
const links = document.querySelectorAll(".nav-link");

if (links.length > 0) {
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

/* ACTIVE LINK ON SCROLL */
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  if (!sections.length) return;

  sections.forEach(section => {
    let top = section.offsetTop - 100;
    let height = section.offsetHeight;
    let scroll = window.scrollY;

    if (scroll >= top && scroll < top + height) {
      let id = section.getAttribute("id");
      if (!id) return;

      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
});