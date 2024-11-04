/* ------------------ OPEN / CLOSE MENU ------------------ */
const navMenu = document.getElementById('nav-menu');
const navOpenBtn = document.getElementById('open-btn');
const navCloseBtn = document.getElementById('close-btn');

const openMenu = () => {
  // Open Menu
  if (navOpenBtn && navMenu) {
    navOpenBtn.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }
  // Close Menu 
  if (navCloseBtn && navMenu) {
    navCloseBtn.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }
}
openMenu();

/* ------------------ REMOVE MENU AFTER CLICK ------------------ */
const navLinks = document.querySelectorAll('.nav-link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
}
navLinks.forEach(link => link.addEventListener('click', linkAction));

/* ------------------ HEADER BG ------------------ */
const header = document.getElementById('header');
header.style.backdropFilter = 'blur(20px)';
const width = 700;

window.addEventListener('load', () => {
  if (window.innerWidth >= width) {
    header.style.backdropFilter = 'blur(20px)';
  } else {
    header.style.backdropFilter = 'none';
  }
})

// ----------------------- SWIPPER -----------------------
const swiperHome = new Swiper('.home-swiper', {
  loop: true,
  speed: 800,
  parallax: true,
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: (number) => {return '0' + number},
    formatFractionTotal: (number) => {return '0' + number},
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});