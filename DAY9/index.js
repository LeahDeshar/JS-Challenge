// Key concepts covered:

// document.querySelector()
// addEventListener()
// classList.contains()
// classList.add()
// classList.remove()
// play()
// pause()

//access the button where we can click and play/pause
const btn = document.querySelector(".switch-btn");
//access to where the video is located
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  //when we click on the btn do thid function
  //check if class contains "slide"
  //after cheking if there is no slide
  //add slide to the btn
  //this means we add the slide only when we want to pause
  //no slide means btn is in play mode
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloading when window loads
//load and DocumentContentLoad is not same event
//this is to load when the video is not loading
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
