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

const about = document.querySelector("#main");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  //we are using data id in the html file
  //to access this we can use dataset and
  //more precise--> id
  const info = e.target.dataset.id; //History,Vision,Goals
  //buttons
  //   console.log(id);
  //only when we click on it
  //if block will be executed if there is no undefined value
  if (info) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    //then add the active class to thhe clicked btn only
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    //clicked id-info is passed to this element
    // and add the active class for that element
    const element = document.getElementById(info);
    element.classList.add("active");
  }
});
