document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document
    .querySelectorAll(".nav-links a")
    .forEach((link) =>
      link.addEventListener("click", () => navLinks.classList.remove("active"))
    );
});
