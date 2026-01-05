document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const nav = document.querySelector("nav");
  const overlay = document.getElementById("overlay");

  const navButton = document.getElementById("nav-button");
  const openIcon = document.getElementById("nav-open-icon");
  const closeIcon = document.getElementById("nav-close-icon");

  if (!navButton || !mobileMenu || !overlay || !nav) return;

  function openMenu() {
    mobileMenu.style.display = "block";
    nav.classList.toggle("shadow");
    navButton.setAttribute("aria-expanded", "true");
    navButton.setAttribute("aria-label", "Close Menu");
    if (openIcon) openIcon.style.display = "none";
    if (closeIcon) closeIcon.style.display = "block";
    overlay.style.display = "block";
    overlay.onclick = closeMenu;
  }

  function closeMenu() {
    mobileMenu.style.display = "none";
    nav.classList.toggle("shadow");
    navButton.setAttribute("aria-expanded", "false");
    navButton.setAttribute("aria-label", "Open Menu");
    if (openIcon) openIcon.style.display = "block";
    if (closeIcon) closeIcon.style.display = "none";
    overlay.style.display = "none";
    overlay.onclick = null;
  }

  navButton.addEventListener("click", function () {
    const expanded = navButton.getAttribute("aria-expanded") === "true";
    if (expanded) closeMenu();
    else openMenu();
  });
});
