document.addEventListener("DOMContentLoaded", function () {
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");

  const mobileHeader = document.getElementsByClassName("mobile-header")[0];

  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const overlay = document.getElementById("nav-overlay");

  function toggleMenu() {
    const isOpen = menu.classList.toggle("is-open");
    overlay.classList.toggle("is-visible");
    toggle.setAttribute("aria-expanded", isOpen);
    if (isOpen) {
      openIcon.style.display = "none";
      closeIcon.style.display = "block";
      mobileHeader.style.borderBottom = "none";
    } else {
      openIcon.style.display = "block";
      closeIcon.style.display = "none";
      mobileHeader.style.borderBottom = "";
    }
  }

  toggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});
