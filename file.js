// Mobile Hamburger Toggle + Auto-Close on Link Click
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  // Open/close menu when checkbox changes
  navToggle.addEventListener("change", () => {
    if (navToggle.checked) {
      siteNav.classList.add("open");
    } else {
      siteNav.classList.remove("open");
    }
  });

  // Close menu when a nav link is clicked
  const navLinks = document.querySelectorAll(".site-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navToggle.checked) {
        navToggle.checked = false;
        siteNav.classList.remove("open");
      }
    });
  });
});
