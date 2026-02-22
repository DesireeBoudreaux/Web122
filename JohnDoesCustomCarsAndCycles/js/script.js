//Hamburger menu
const toggleButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

toggleButton.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', isOpen);
});