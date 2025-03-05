// Adding Event listener to humbeger menu
const menu = document.getElementById('menu');
const MobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');

menu.addEventListener('click', () => {
  MobileMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  MobileMenu.style.display = 'none';
});

document.addEventListener('click', (e) => {
    if (e.target.id !== 'menu' && e.target.id !== 'mobile-menu' && e.target.id !== 'close') {
        MobileMenu.style.display = 'none';
    }
});