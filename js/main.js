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


