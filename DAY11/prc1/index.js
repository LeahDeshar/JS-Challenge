// const main = document.getElementById("main");
// const btns = document.querySelectorAll(".tab-btn");

// main.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;

//   if (id) {
//     btns.forEach((btn) => btn.classList.remove("active"));
//     e.target.classList.add("active");
//     main.forEach((main) => main.classList.remove("active"));
//   }
// });

let btns = document.querySelectorAll("button");

for (i of btns) {
  i.addEventListener("click", function () {
    console.log(this);
  });
}
