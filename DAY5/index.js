const btn = document.querySelector(".sidebar-toggle");
const show = document.querySelector(".sidebar");
const close = document.querySelector(".close-btn");
btn.addEventListener("click", function () {
  show.classList.toggle("show-sidebar");
});
close.addEventListener("click", function () {
  show.classList.remove("show-sidebar");
});
