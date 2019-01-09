// Arrays of 10 fruits & descriptions - push on Question Box w/ each Next Clicks
let exoticFruits = [
  "Durian - Known for its pungent smell and porcupine-like exterior, it is very well known fruit in Southeast Asia.",
  "Starfruit - Know for its citrus and tangy flavor and its striking resemblance to a 5 pointed figure.",
  "Passion Fruit - Rich in Vitamin C, this citrus and seedy fruit is lightweight and popular in various drinks.",
  "Guava - Common tropical fruit with a unique flavour and fragrance. The exterior is hard, but soften over time.",
  "Rambutan - Appearance can be deceiving, this ball-size fruit has a white and flesh-like interior and a hardened seed.",
  "Lychee - With a slightly harden shell, this fruit’s interior is sweetly scented and a large central stone.",
  "Jackfruit - Oddly shaped, this fruit can grow really big in size and weight over a period of time. It’s yellow hue “meat” is fragrant and distinctable.",
  "Mangosteen - Originated from Southeast Asia, this exotic fruit have a hard exterior shell, yet fibrous-like flesh.",
  "Longan - Tropical and small size shaped, this fruit grows together in pod like branches.",
  "Dragonfruit - Varies in size and colors, this exotic fruit contains many chia-like seeds within its white and red interior."
];

let questionBox = document.getElementById("description");
questionBox.addEventListener("click", nextQuestion);

function nextQuestion() {
  for (let i = 0; i < exoticFruits.length; i++) {
    questionBox.innerHTML = exoticFruits[i];
  }
}


console.log(questionBox)
// Click, drag, and drop
// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }

// console.log(exoticFruits[0]);
// console.log(eachQuestion)
// FullD: function () {
// return this.Name + " - " + this.Description}}
// for (let i = 0; i < exoticFruits.length; i++)
