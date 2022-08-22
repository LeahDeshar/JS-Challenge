const btn = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
/*
we have three button
btn-1 counts down for each click --red 
btn-2 reset the count --clear to 0
btn-3 counts up --green
*/
let count = 0;
btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log(styles);
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
