const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF9F1C"];

const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  console.log(`Background changed to ${randomColor}`);
});
