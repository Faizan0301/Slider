const slider_images = document.querySelectorAll(".slider-img");
const prev_button = document.getElementById("prev");
const next_button = document.getElementById("next");

var slider = {
  len: slider_images.length,
  position: 0,

  prev: function (n = this.position) {
    let prev = n - 1;
    return (prev < 0) ? (slider.len - 1) : (prev);
  },

  next: function (n = this.position) {
    let next = n + 1;
    return (next > slider.len - 1) ? (0) : (next);
  },

  slidePrevious: function () {
    slider.position = slider.prev();
    setPosition();
  },

  slideNext: function () {
    slider.position = slider.next();
    setPosition();
  }
}

prev_button.addEventListener("click", slider.slidePrevious);
next_button.addEventListener("click", slider.slideNext);

function setPosition() {
  slider_images.forEach((slide, i) => {
    slide.classList.toggle("active", i == slider.position);
  })
}

setPosition();