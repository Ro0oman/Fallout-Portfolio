   document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.parallax');
    new simpleParallax(images, {
  scale: 1.5,        // aumenta la escala para dar margen extra
  orientation: 'up',
  delay: 1,
  transition: 'cubic-bezier(0,0,0,1)'
});
  });
  // document.addEventListener('DOMContentLoaded', function () {
  //   var images = document.querySelectorAll('.parallax');
  //   if (images.length) {
  //     new simpleParallax(images, {
  //       scale: 2,
  //       orientation: 'down',
  //     });
  //   }
  // });

  // Toggle menú responsive
  const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cierra el menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
  
});


// JS simple
window.addEventListener('load', () => {
  document.querySelector('.hero-header').classList.add('visible');
});


const icons = document.querySelectorAll('.icon-list-header li');
icons.forEach((icon, i) => {
  setTimeout(() => icon.classList.add('visible'), i*150);
});

const items = document.querySelectorAll('.timeline-item');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.2});
items.forEach(item => revealObserver.observe(item));