const colorArea = document.querySelector(".colorArea");
const changeColor = document.getElementById("changeBTN");

const colorList = [
  "red",
  "cyan",
  "green",
  "yellow",
  "blue",
  "rgba(133,122,200)",
  "#f15025",
  "#f14e0d",
];

//! generate a random number to pick color from the colorList
const getRandomColor = () => {
  return Math.floor(Math.random() * colorList.length);
};

changeColor.addEventListener("click", () => {
  const randomColor = getRandomColor();

  document.body.style.backgroundColor = colorList[randomColor];
  colorArea.textContent = colorList[randomColor];
  colorArea.style.color = "white";
  colorArea.style.backgroundColor = "black";
});
