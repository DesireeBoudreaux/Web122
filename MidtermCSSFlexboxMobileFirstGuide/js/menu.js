// Hamburger menu toggle for mobile

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  // Optional: close menu when a link is clicked (mobile)
  nav.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'a') {
      nav.classList.remove('open');
    }
  });
});
