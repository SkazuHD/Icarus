let heroText = document.getElementById("super");

let texte = [
  "Lerne zu Fliegen !",
  "The Future is in the air !",
  "#LearnToFly",
  "Hol dir die Freiheit !",
];
let index = 0;
setInterval(function () {
  heroText.classList.add("fadeout");
  setTimeout(function () {
    heroText.innerText = texte[index];
    heroText.classList.remove("fadeout");
  }, "3000");
  index++;
  if (index == texte.length) {
    index = 0;
  }
}, "8000");
