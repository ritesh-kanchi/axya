document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const overlay = document.getElementById("nav-overlay");
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileHeader = document.querySelector(".mobile-header");

  if (!toggle || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add("is-open");
    overlay.classList.add("is-visible");
    toggle.setAttribute("aria-expanded", "true");

    if (openIcon) openIcon.style.display = "none";
    if (closeIcon) closeIcon.style.display = "block";
    if (mobileHeader) mobileHeader.style.borderBottom = "none";

    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    toggle.setAttribute("aria-expanded", "false");

    if (openIcon) openIcon.style.display = "block";
    if (closeIcon) closeIcon.style.display = "none";
    if (mobileHeader) mobileHeader.style.borderBottom = "";

    document.body.style.overflow = "";
  }

  function toggleMenu() {
    const isCurrentlyOpen = menu.classList.contains("is-open");
    if (isCurrentlyOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
});
