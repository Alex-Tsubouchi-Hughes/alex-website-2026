// Tool Bar mouse up and down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.getElementById("tool-bar").style.top = "0";
} else {
document.getElementById("tool-bar").style.top = "-110px";
}
if (prevScrollpos > currentScrollPos) {
document.getElementById("tool-bar-logo-right").style.right = "0px";
} else {
document.getElementById("tool-bar-logo-right").style.right = "-350px";
}
if (prevScrollpos > currentScrollPos) {
document.getElementById("tool-bar-logo-left").style.left = "0px";
} else {
document.getElementById("tool-bar-logo-left").style.left = "-350px";
}
if (prevScrollpos > currentScrollPos) {
document.getElementById("tool-bar-phone").style.top = "0px";
} else {
document.getElementById("tool-bar-phone").style.top = "-235px";
}
if (prevScrollpos > currentScrollPos) {
document.getElementById("tool-bar-HD").style.top = "0px";
} else {
document.getElementById("tool-bar-HD").style.top = "-235px";
}
prevScrollpos = currentScrollPos;
}



// Phone Tool Bar links
function myFunction() {
  var x = document.getElementById("phone-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var x = document.getElementById("phone-links-bg");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("phone-links");
  const bg = document.getElementById("phone-links-bg");

  const closeLinks = [
    '#work',
    '#about',
    '#contacts'
  ];

  closeLinks.forEach(id => {
    const link = document.querySelector(`a[href="${id}"]`);
    if (link) {
      link.addEventListener("click", function () {
        menu.style.display = "none";
        bg.style.display = "none";
      });
    }
  });
});
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  const phoneLinks = document.getElementById("phone-links");
  const phoneBg = document.getElementById("phone-links-bg");

  if (phoneLinks && phoneBg) {
    phoneLinks.style.display = "none";
    phoneBg.style.display = "none";
  }

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("tool-bar").style.top = "0";
    document.getElementById("tool-bar-logo-right").style.right = "0px";
    document.getElementById("tool-bar-logo-left").style.left = "0px";
    document.getElementById("tool-bar-phone").style.top = "0px";
    document.getElementById("tool-bar-HD").style.top = "0px";
  } else {
    document.getElementById("tool-bar").style.top = "-110px";
    document.getElementById("tool-bar-logo-right").style.right = "-350px";
    document.getElementById("tool-bar-logo-left").style.left = "-350px";
    document.getElementById("tool-bar-phone").style.top = "-235px";
    document.getElementById("tool-bar-HD").style.top = "-235px";
  }

  prevScrollpos = currentScrollPos;
};
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  const phoneLinks = document.getElementById("phone-links");
  const phoneBg = document.getElementById("phone-links-bg");

  if (phoneLinks && phoneBg) {
    phoneLinks.style.display = "none";
    phoneBg.style.display = "none";
  }

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("tool-bar").style.top = "0";
    document.getElementById("tool-bar-logo-right").style.right = "0px";
    document.getElementById("tool-bar-logo-left").style.left = "0px";
    document.getElementById("tool-bar-phone").style.top = "0px";
    document.getElementById("tool-bar-HD").style.top = "0px";
  } else {
    document.getElementById("tool-bar").style.top = "-110px";
    document.getElementById("tool-bar-logo-right").style.right = "-350px";
    document.getElementById("tool-bar-logo-left").style.left = "-350px";
    document.getElementById("tool-bar-phone").style.top = "-235px";
    document.getElementById("tool-bar-HD").style.top = "-235px";
  }

  prevScrollpos = currentScrollPos;
};


// アレックス Logo function
var alexjplogo = ["images/icons/alexjp-1.png", 
  "images/icons/alexjp-2.png", 
  "images/icons/alexjp-3.png", 
  "images/icons/alexjp-4.png",
  "images/icons/alexjp-5.png",
  "images/icons/alexjp-6.png",
  "images/icons/alexjp-7.png",
  "images/icons/alexjp-8.png",
  "images/icons/alexjp-9.png",
  "images/icons/alexjp-10.png",
  "images/icons/alexjp-11.png",
  "images/icons/alexjp-12.png",
  "images/icons/alexjp-13.png",
  "images/icons/alexjp-14.png",
  "images/icons/alexjp-15.png",
  "images/icons/alexjp-16.png",
  "images/icons/alexjp-17.png",
  "images/icons/alexjp-18.png",
  "images/icons/alexjp-19.png",
  "images/icons/alexjp-20.png",
  "images/icons/alexjp-21.png",
  "images/icons/alexjp-22.png",
  "images/icons/alexjp-23.png",
  "images/icons/alexjp-24.png",
  "images/icons/alexjp-25.png",
  "images/icons/alexjp-26.png",
  "images/icons/alexjp-27.png",
  "images/icons/alexjp-28.png",
  "images/icons/alexjp-29.png",
  "images/icons/alexjp-30.png",
  "images/icons/alexjp-31.png",
  "images/icons/alexjp-32.png",
  "images/icons/alexjp-33.png",
  "images/icons/alexjp-34.png",
  "images/icons/alexjp-35.png",
  "images/icons/alexjp-36.png",
  "images/icons/alexjp-37.png",
  "images/icons/alexjp-38.png",
  "images/icons/alexjp-39.png",
  "images/icons/alexjp-40.png",
  "images/icons/alexjp-41.png",
  "images/icons/alexjp-42.png",
  "images/icons/alexjp-43.png",
  "images/icons/alexjp-44.png",
  "images/icons/alexjp-45.png",
  "images/icons/alexjp-46.png",
  "images/icons/alexjp-47.png",
  "images/icons/alexjp-48.png",
  "images/icons/alexjp-49.png",
  "images/icons/alexjp-50.png"
];
function getRandomalexjplogoImage() {
  var index = Math.floor(Math.random() * alexjplogo.length);
  return alexjplogo[index];
}
$("#alexjplogo-container").hover(
  function() {
    var image = getRandomalexjplogoImage();
    $("#alexjplogo").attr("src", image);
    console.log(image);
  });
// Alex Logo function
  var alexlogo = ["images/icons/alex-1.png", 
    "images/icons/alex-2.png", 
    "images/icons/alex-3.png", 
    "images/icons/alex-4.png",
    "images/icons/alex-5.png",
    "images/icons/alex-6.png",
    "images/icons/alex-7.png",
    "images/icons/alex-8.png",
    "images/icons/alex-9.png",
    "images/icons/alex-10.png",
    "images/icons/alex-11.png",
    "images/icons/alex-12.png",
    "images/icons/alex-13.png",
    "images/icons/alex-14.png",
    "images/icons/alex-15.png",
    "images/icons/alex-16.png",
    "images/icons/alex-17.png",
    "images/icons/alex-18.png",
    "images/icons/alex-19.png",
    "images/icons/alex-20.png",
    "images/icons/alex-21.png",
    "images/icons/alex-22.png",
    "images/icons/alex-23.png",
    "images/icons/alex-24.png",
    "images/icons/alex-25.png",
    "images/icons/alex-26.png",
    "images/icons/alex-27.png",
    "images/icons/alex-28.png",
    "images/icons/alex-29.png",
    "images/icons/alex-30.png",
    "images/icons/alex-31.png",
    "images/icons/alex-32.png",
    "images/icons/alex-33.png",
    "images/icons/alex-34.png",
    "images/icons/alex-35.png",
    "images/icons/alex-36.png",
    "images/icons/alex-37.png",
    "images/icons/alex-38.png",
    "images/icons/alex-39.png",
    "images/icons/alex-40.png",
    "images/icons/alex-41.png",
    "images/icons/alex-42.png",
    "images/icons/alex-43.png",
    "images/icons/alex-44.png",
    "images/icons/alex-45.png",
    "images/icons/alex-46.png",
    "images/icons/alex-47.png",
    "images/icons/alex-48.png",
    "images/icons/alex-49.png",
    "images/icons/alex-50.png"
  ];
function getRandomalexlogoImage() {
  var index = Math.floor(Math.random() * alexlogo.length);
  return alexlogo[index];
}
$("#alexlogo-container").hover(
  function() {
  var image = getRandomalexlogoImage();
    $("#alexlogo").attr("src", image);
    console.log(image);
  });
// アレックス Logo Reset on Mouseout
$("#alexjplogo-container").mouseout(function(){
  $("#alexjplogo").attr("src", "images/logo/alexjp-0.png");
  console.log(image);
});
// Alex Logo Reset on Mouseout
$("#alexlogo-container").mouseout(function(){
  $("#alexlogo").attr("src", "images/logo/alex-0.png");
  console.log(image);
});



// Carousel Dots
const slides = document.querySelectorAll(".fade-slide");
const dotsContainer = document.querySelector(".dots");
let index = 0;
let startX = 0;
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");
function updateCarousel() {
  slides.forEach((slide, i) =>
    slide.classList.toggle("active", i === index)
  );
  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === index)
  );
}



// Cursour
function plusSlides(n) {
  index += n;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  updateCarousel();
}



// Carousel Images (touch handling)
window.plusSlides = plusSlides;
const carousel = document.querySelector(".fade-carousel");
carousel.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
carousel.addEventListener("touchend", e => {
  const delta = e.changedTouches[0].clientX - startX;

  if (delta < -40) index++;     // swipe left
  if (delta > 40) index--;      // swipe right

  // infinite loop
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  updateCarousel();
});
updateCarousel();
