const btnStart = document.querySelector(".button-start");
const btnStop = document.querySelector(".button-stop");
const body = document.querySelector("body");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorsIntervalId = null;
let isActive = false;

const onStartBtnClick = () => {
  if (!isActive) {
    isActive = true;
    colorsIntervalId = setInterval(() => {
      return (body.style.backgroundColor = `${
        colors[randomIntegerFromInterval(0, colors.length - 1)]
      }`);
    }, 1000);
  }
};

const onStopBtnClick = () => {
  if (isActive) {
    isActive = false;
    clearInterval(colorsIntervalId);
  }
};

btnStart.addEventListener("click", onStartBtnClick);
btnStop.addEventListener("click", onStopBtnClick);
