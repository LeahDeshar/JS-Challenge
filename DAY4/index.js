const btnToggle = document.querySelector(".nav-toggle");
const link = document.querySelector(".links");

btnToggle.addEventListener("click", function () {
  link.classList.toggle("show-links");
});
