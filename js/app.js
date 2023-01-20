let heroText = document.getElementById("super");
let cpYear = document.getElementById("cp-year");

let currentYear = new Date().getFullYear();
cpYear.innerText = currentYear;

let texte = ["Lerne zu Fliegen !", "The Future is in the air !", "#LearnToFly", "Hol dir die Freiheit !"];
let index = 0;
setInterval(function () {
  heroText.classList.add("fadeout");
  setTimeout(function () {
    heroText.innerText = texte[index];
    heroText.classList.remove("fadeout");
  }, "2000");
  index++;
  if (index == texte.length) {
    index = 0;
  }
}, "6000");
//FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
//Product Slider
let slider_left = document.getElementById("slider-left");
let slider_right = document.getElementById("slider-right");

slider_left.addEventListener("click", function () {
  let allImages = document.querySelectorAll(".slider-image");
  let allInfo = document.querySelectorAll(".info-item");
  for (let i = 0; i < allImages.length; i++) {
    if (allImages[i].classList.contains("active")) {
      allImages[i].classList.remove("active");
      allInfo[i].classList.remove("activeInfo");
      if (i > 0) {
        console.log("i>0");
        allImages[i - 1].classList.add("active");
        allInfo[i - 1].classList.add("activeInfo");
        break;
      } else {
        allImages[2].classList.add("active");
        allInfo[2].classList.add("activeInfo");
        break;
      }
    }
  }
});
slider_right.addEventListener("click", function () {
  let allImages = document.querySelectorAll(".slider-image");
  for (let i = 0; i < allImages.length; i++) {
    if (allImages[i].classList.contains("active")) {
      allImages[i].classList.remove("active");
      if (i < allImages.length - 1) {
        allImages[i + 1].classList.add("active");
        break;
      } else {
        allImages[0].classList.add("active");
        break;
      }
    }
  }
});
