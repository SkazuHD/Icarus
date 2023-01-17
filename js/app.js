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
}, "8000");

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
