document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Lock body scroll when menu is open
    if (navLinks.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) =>
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.style.overflow = ""; // Re-enable scrolling
    })
  );
});
