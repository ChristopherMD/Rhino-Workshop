// Coded by ChristopherMD - 2020

//  menu toggle
document.querySelector('.menu-toggler').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('.menu-toggler').classList.toggle('open');
  document.querySelector('.menu-icon').classList.toggle('open');
});
