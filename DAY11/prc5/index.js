const main = document.getElementById("main");
const content = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".btn-tabs");

main.addEventListener("click", function (e) {
  const info = e.target.dataset.id;

  btns.forEach(function (btn) {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");

  content.forEach(function (x) {
    x.classList.remove("active");
  });
  const element = document.getElementById(info);
  element.classList.add("active");
});
