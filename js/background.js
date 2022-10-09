const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random()* images.length)];
const Body = document.querySelector("body");

console.log(images);
const bgImage = document.createElement("img");

bgImage.style.width = "2000px";
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
