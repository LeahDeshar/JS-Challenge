const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  //we are using data id in the html file
  //to access this we can use dataset and
  //more precise--> id
  const id = e.target.dataset.id; //History,Vision,Goals
  //buttons
  //   console.log(id);
  //only when we click on it
  //if block will be executed if there is no undefined value
  if (id) {
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
    const element = document.getElementById(id);
    console.log(element);
    element.classList.add("active");
  }
});
