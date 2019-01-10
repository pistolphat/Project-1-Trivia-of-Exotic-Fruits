// Arrays of 10 fruits & descriptions - push on Question Box w/ each Next Clicks
let exoticFruits = [
  "1. Durian - Known for its pungent smell and spikey exterior, this fruit is really FOUL!",
  "2. Starfruit - This fruit is has a striking resemblance to a 5 pointed figure.",
  "3. Passion Fruit - This seedy, gooey, and citrus-like fruit is lightweight and popular in various drinks.",
  "4. Guava - A common tropical fruit, this apple-like fruit is nothing like an apple. The seeds are tough, but edible.",
  "5. Rambutan - Appearance can be deceiving, this urchin, ball-sized like fruit is nothing like you've seen before.",
  "6. Lychee - With a slightly harden shell, this fruit’s interior is sweetly scented that contains a large central stone.",
  "7. Jackfruit - Oddly shaped, this fruit can grow really big in size and weight over a period of time. It’s yellow color “meat” is fragrant and distinctable.",
  "8. Mangosteen - This plum-colored fruit is hard on the oustide, fibrous on the inside.",
  "9. Longan - Small round balls of fury, this fruit grows together in pod like branches.",
  "10. Dragonfruit - Varies in size and colors, this exotic fruit contains many chia-like seeds within its interior."
];
//Description bar reset to Default Message, when clicked.
let description = document.getElementById('description')
description.addEventListener('click', resetD);
function resetD () {description.innerHTML = "Click each box for additional help. CLICK & DRAG to the correct picture."};

//Each clickable box, displays different statement based on different fruits.
let durianBox = document.getElementById("durian");
durianBox.addEventListener("click", question1);
function question1() {description.innerHTML = exoticFruits[0]}

let starfruitBox = document.getElementById("starfruit");
starfruitBox.addEventListener("click", question2);
function question2() {description.innerHTML = exoticFruits[1]};

let passionBox = document.getElementById("passionfruit");
passionBox.addEventListener("click", question3);
function question3() {description.innerHTML = exoticFruits[2]};

let guavaBox = document.getElementById("guava");
guavaBox.addEventListener("click", question4);
function question4() {description.innerHTML = exoticFruits[3]};

let rambutanBox = document.getElementById("rambutan");
rambutanBox.addEventListener("click", question5);
function question5() {description.innerHTML = exoticFruits[4]};

let lycheeBox = document.getElementById("lychee");
lycheeBox.addEventListener("click", question6);
function question6() {description.innerHTML = exoticFruits[5]};

let jackfruitBox = document.getElementById("jackfruit");
jackfruitBox.addEventListener("click", question7);
function question7() {description.innerHTML = exoticFruits[6]};

let mangosteenBox = document.getElementById("mangosteen");
mangosteenBox.addEventListener("click", question8);
function question8() {description.innerHTML = exoticFruits[7]};

let longanBox = document.getElementById("longan");
longanBox.addEventListener("click", question9);
function question9() {description.innerHTML = exoticFruits[8]};

let dragonBox= document.getElementById("dragonfruit");
dragonBox.addEventListener("click", question10);
function question10() {description.innerHTML = exoticFruits[9]};


// Click, drag, and drop onto each picture. 
function allowDrop(ev) {
ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//make the banner, clickable to show answers
let header = document.querySelector("#header")
header.addEventListener('click', showAnswers)
function showAnswers () {
  document.getElementById("a1").innerHTML = "1. Durian"
  document.getElementById("a2").innerHTML = "4. Guava"
  document.getElementById("a3").innerHTML = "7. Jackfruit"
  document.getElementById("a4").innerHTML = "5. Rambutan"
  document.getElementById("a5").innerHTML = "6. Lychee"
  document.getElementById("a6").innerHTML = "8. Mangosteen"
  document.getElementById("a7").innerHTML = "2. Starfruit"
  document.getElementById("a8").innerHTML = "10. Dragonfruit"
  document.getElementById("a9").innerHTML = "9. Longan"
  document.getElementById("a10").innerHTML = "3. Passion Fruit"

  // checkMatches() - still working on it **See below**

}

  // add to Scores
let scores = []



// Check Scoring function
function checkMatches() {
  if (durianBox.innerHTML === document.getElementById('a1').innerHTML) {
    durianBox.style.background = "green";
  } else {
    durianBox.style.background = "red";
  }
}


// console.log(header)
// console.log(showAnswers())
// console.log(question1);
// console.log(eachQuestion)
// FullD: function () {
// return this.Name + " - " + this.Description}}
// for (let i = 0; i < exoticFruits.length; i++)