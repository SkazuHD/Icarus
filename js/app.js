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
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
