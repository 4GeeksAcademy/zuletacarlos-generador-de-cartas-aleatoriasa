import "bootstrap";
import "./style.css";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  document.querySelector(".number").innerHTML = randomValue;
  document.querySelector(".top-suit").innerHTML = randomSuit;
  document.querySelector(".bottom-suit").innerHTML = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector(".card").style.color = "red";
  } else {
    document.querySelector(".card").style.color = "black";
  }
};