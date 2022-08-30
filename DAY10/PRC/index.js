const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

//smaller screen click event
navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  //   console.log(linksHeight); returns 214...
  //height of nav-ul-->linksContainer is set to 0 in css file
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //   console.log(containerHeight); returns 0

  if (containerHeight === 0) {
    //if height is 0 in css then put
    //height of it to the value of linksHeight =214
    //this will open the nav after clicking in the bar
    //for small screen
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    //this block will hide as we click and the if condition is not true
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

//Do when the scroll event happen
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  //pageYOffset returns the value in px which has been scrolled from top to bottom vertically
  //when we have scrolled above 500px

  const navHeight = navbar.getBoundingClientRect().height;
  //   console.log(navHeight); returns 84px

  if (scrollHeight > navHeight) {
    //when scrolled above the 84px
    //navbar is made fixed
    navbar.classList.add("fixed-nav");
  } else {
    //if condition is false this class is removed
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    //we add the show-link class to toplink
    //it will show pushToTop arrow
    //it is initially hidden and shown when
    //scrolled above 500px
    topLink.classList.add("show-link");
  } else {
    //else remove
    topLink.classList.remove("show-link");
  }
});

//on clicking on each link do this event
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position += containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
