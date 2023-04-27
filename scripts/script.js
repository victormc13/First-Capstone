// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menuOptions = document.querySelector('.menu-options');
const menu = document.getElementById('menu');

// Open menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
});
// Close menu
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});
// Close the menu if any link it's clicked
menuOptions.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.style.display = 'none';
  }
});