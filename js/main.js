document.addEventListener('DOMContentLoaded', function () {
  // Parallax Initialization
  const parallaxImages = document.querySelectorAll('.parallax');
  if (parallaxImages.length && typeof simpleParallax !== 'undefined') {
    new simpleParallax(parallaxImages, {
      scale: 1.5,
      orientation: 'up',
      delay: 1,
      transition: 'cubic-bezier(0,0,0,1)'
    });
  }

  // Mobile Menu Toggle
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Animation reveal
  const heroes = document.querySelector('.hero-header');
  if (heroes) heroes.classList.add('visible');

  const icons = document.querySelectorAll('.icon-list-header li');
  icons.forEach((icon, i) => {
    setTimeout(() => icon.classList.add('visible'), i * 150);
  });

  const items = document.querySelectorAll('.timeline-item');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  items.forEach(item => revealObserver.observe(item));

  // Slider Logic (Dynamic for all sliders)
  document.querySelectorAll('.slider-container').forEach(container => {
    const wrapper = container.querySelector('.slider-wrapper');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');

    if (prevBtn && nextBtn && wrapper) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (wrapper.scrollLeft <= 0) {
          wrapper.scrollTo({ left: wrapper.scrollWidth, behavior: 'smooth' });
        } else {
          wrapper.scrollBy({ left: -wrapper.offsetWidth, behavior: 'smooth' });
        }
      });

      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (wrapper.scrollLeft + wrapper.offsetWidth >= wrapper.scrollWidth - 20) {
          wrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          wrapper.scrollBy({ left: wrapper.offsetWidth, behavior: 'smooth' });
        }
      });

      // Autoplay logic
      let autoplayInterval = setInterval(() => {
        nextBtn.click();
      }, 2000);

      container.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
      container.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
          nextBtn.click();
        }, 2000);
      });
    }
  });

  // Modal Logic
  const modal = document.getElementById('project-modal');
  if (modal) {
    const closeModal = modal.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalWhy = document.getElementById('modal-why-tag');
    const modalTime = document.getElementById('modal-time');
    const modalDescription = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');
    const modalVisuals = modal.querySelector('.modal-slider-container');

    document.querySelectorAll('.card[data-title]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.slider-btn')) return;

        const title = card.getAttribute('data-title');
        const why = card.getAttribute('data-why');
        const whyLabel = card.getAttribute('data-why-label') || 'Motivo';
        const time = card.getAttribute('data-time');
        const timeLabel = card.getAttribute('data-time-label') || 'Tiempo';
        const tech = card.getAttribute('data-tech');
        const description = card.getAttribute('data-description');
        const images = card.getAttribute('data-images').split(',');

        modalTitle.textContent = title;
        modalWhy.innerHTML = `<strong>${whyLabel}:</strong> ${why}`;
        modalTime.innerHTML = `<strong>${timeLabel}:</strong> ${time}`;
        modalDescription.textContent = description;
        
        modalTech.innerHTML = tech.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join('');
        modalVisuals.innerHTML = images.map(src => `<img src="${src}" class="slider-image" style="margin-bottom:1rem; border-radius:8px; width:100%; display:block;">`).join('');

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeHandler = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (closeModal) closeModal.addEventListener('click', closeHandler);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeHandler();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) closeHandler();
    });
  }
});