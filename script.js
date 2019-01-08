// Click, drag, and drop
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

const exoticFruits = [
  { Name: "Durian", Description: "Known for its pungent smell and porcupine-like exterior, it is very well known fruit in Southeast Asia."},
  { Name: "Starfruit", Description: "Know for its citrus and tangy flavor and also its resemblance to a 5 pointed figure."},
  { Name: "Passion Fruit", Description: "Rich in Vitamin C, this citrus and seedy fruit is lightweight and popular in various drinks." },
  { Name: "Guava", Description: "Common tropical fruit with a unique flavour and fragrance. The exterior is hard, but soften over time." },
  { Name: "Rambutan", Description: "Appearance can be deceiving, this ball-size fruit has a white and flesh-like interior and a hardened seed." },
  { Name: "Lychee", Description: "With a slightly harden shell, this fruit’s interior is sweetly scented and a large central stone." },
  { Name: "Jackfruit", Description: "Oddly shaped, this fruit can grow really big in size and weight over a period of time. It’s yellow hue “meat” is fragrant and distinctable." },
  { Name: "Mangosteen", Description: "Originated from Southeast Asia, this exotic fruit have a hard exterior shell, yet fibrous-like flesh." },
  { Name: "Longan", Description: "Tropical and small size shaped, this fruit grows together in pod like branches." },
  { Name: "Dragonfruit", Description: "Several size and colors, this exotic fruit contains many chia-like seeds within its white and red interior." }
];
