/*
 1. (we have three btns) set click event on each btns
 2. pass the data-id value in the container
 3. when we click on one btn other should be inactive
 4. set the clicked btn active
*/
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
});
