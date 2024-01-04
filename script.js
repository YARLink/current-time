"use strict";

const body = document.querySelector("body");

function makeDoubleDigits(digit) {
  return digit < 10 ? "0" + digit : digit;
}

function getCurrentTime() {
  const date = new Date();

  const hh = makeDoubleDigits(date.getHours());
  const mm = makeDoubleDigits(date.getMinutes());
  const ss = makeDoubleDigits(date.getSeconds());

  return `${hh}:${mm}:${ss}`;
}

function setTimeElementsColor(element) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  element.style.color = "#" + randomColor;
}

function displayColoredTime(elements) {
  const timeWrapper = document.createElement("div");
  timeWrapper.classList.add("time-wrapper");

  for (const element of elements) {
    const timeElement = document.createElement("div");
    timeElement.textContent = element;
    setTimeElementsColor(timeElement);
    timeWrapper.appendChild(timeElement);
  }
  body.innerHTML = "";
  body.appendChild(timeWrapper);
}

setInterval(() => displayColoredTime(getCurrentTime()), 1000);