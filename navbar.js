const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(section => {
    let top = section.offsetTop - 100;
    let height = section.offsetHeight;
    let scroll = window.scrollY;

    if(scroll >= top && scroll < top + height){
      let id = section.getAttribute('id');
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === "#" + id){
          link.classList.add('active');
        }
      });
    }
  });
});