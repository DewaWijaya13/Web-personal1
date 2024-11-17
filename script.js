

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");
  const body = document.body;

  // Toggle menu visibility
  hamburgerMenu.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });

  // Close menu when clicking outside
  body.addEventListener("click", function (event) {
    if (
      !navbarNav.contains(event.target) && // Check if click is outside navbar-nav
      !hamburgerMenu.contains(event.target) // Check if click is outside hamburger-menu
    ) {
      navbarNav.classList.remove("active");
    }
  });
});


