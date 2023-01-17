let heroText = document.getElementById("super");

let texte = [
  "Lerne zu Fliegen !",
  "The Future is in the air !",
  "#LearnToFly",
  "Hol dir die Freiheit !",
];
let index = 0;
setInterval(function () {
  console.log(index);
  heroText.innerText = texte[index];
  index++;
  if (index == texte.length) {
    index = 0;
  }
}, "5000");
