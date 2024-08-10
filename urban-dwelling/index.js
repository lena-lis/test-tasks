const toggleButton = document.querySelector('.main-header__toggle-container');
const navMenuOverlay = document.querySelector('[data-menu-overlay]');
const navContainer = document.querySelector('.main-navigation');
const navLinks = document.querySelectorAll('.main-navigation a');

function closeMenu () {
  document.body.classList.remove('scroll-lock');
  toggleButton.classList.remove('is-open');
  navContainer.classList.remove('is-open');
  navMenuOverlay.style.display = 'none';
  navLinks.forEach(navLink => {
    navLink.removeEventListener('click', closeMenu);
  });
  navMenuOverlay.removeEventListener('click', closeMenu);
  toggleButton.removeEventListener('click', closeMenu);
}

function openMenu() {
  if(!toggleButton) {
    return;
  }
  document.body.classList.add('scroll-lock');
  toggleButton.classList.add('is-open');
  navContainer.classList.add('is-open');
  navMenuOverlay.style.display = 'block';
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', closeMenu);
  });
  navMenuOverlay.addEventListener('click', closeMenu);
  toggleButton.addEventListener('click', closeMenu);
}

const onToggleButtonClick = () => {
  if (!navMenuOverlay && !navContainer && !toggleButton) {
    return;
  }

  toggleButton.addEventListener('click', openMenu);
}

onToggleButtonClick();