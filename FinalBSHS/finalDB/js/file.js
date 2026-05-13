document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const overlay = document.querySelector(".nav-overlay");

  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("site-nav-open");
    overlay.classList.toggle("visible");

    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
  });

  const navLinks = document.querySelectorAll(".site-nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("site-nav-open");
      overlay.classList.remove("visible");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  overlay.addEventListener("click", () => {
    siteNav.classList.remove("site-nav-open");
    overlay.classList.remove("visible");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

