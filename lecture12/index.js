let box = document.querySelector("#box");
let btn = document.querySelector("#btn");
let stop = document.querySelector("#stop"); // You need to define this element
let colours = ["red", "black", "yellow", "green", "pink", "purple", "orange", "blue"];
let id = null;

function generateRandomColors() {
  let index = Math.floor(Math.random() * colours.length);
  console.log(index);
  let randomColor = colours[index];
  console.log(randomColor);
  box.style.backgroundColor = randomColor;
}

btn.addEventListener("click", () => {
  if (!id) {
    id = setInterval(generateRandomColors, 1000); // Colors change every 1 second
  }
});

stop.addEventListener("click", () => {
  if (id) {
    clearInterval(id);
    id = null;
  }
});