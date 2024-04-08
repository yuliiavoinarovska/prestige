// BURGER MENU
const menu = document.querySelector('.nav');
const menuItem = document.querySelectorAll('.nav__item');
const hamburger = document.querySelector('.nav-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('nav-btn--active');
  menu.classList.toggle('nav--active');
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('nav-btn--active');
    menu.classList.toggle('nav--active');
  });
});

//MODAL
const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('modal--show');
    modal.classList.remove('modal--hide');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.add('modal--hide');
  modal.classList.remove('modal--show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeModal();
  }
});
