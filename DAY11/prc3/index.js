const main = document.getElementById("main");
const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

main.addEventListener("click", function (e) {
  const info = e.target.dataset.id;
  if (info) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    content.forEach(function (x) {
      x.classList.remove("active");
    });
    const element = document.getElementById(info);
    element.classList.add("active");
  }
});
