document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".parallax");

  if (images.length > 0) {
    new simpleParallax(images, {
      scale: 1.5,
      delay: 0.6,
      orientation: "up",
      transition: "cubic-bezier(0,0,0,1)"
    });
  }
});
