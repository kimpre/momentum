const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const Body = document.querySelector("body");

const changeColors1 = colors[Math.floor(Math.random() * colors.length)];
const changeColors2 = colors[Math.floor(Math.random() * colors.length)];

Body.style.background = `linear-gradient(.25turn,${changeColors1},${changeColors2})`;



const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");


bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
