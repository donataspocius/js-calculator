"use strict";

let output = document.querySelector("#output");
let btns = document.querySelectorAll(".btn");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);

    switch (e.target.textContent) {
      case "SUM": {
        return (output.textContent = number1 + number2);
      }
      case "SUB": {
        return (output.textContent = number1 - number2);
      }
      case "DIV": {
        return (output.textContent = number1 / number2);
      }
      case "MUL": {
        return (output.textContent = number1 * number2);
      }
      case "MOD": {
        return (output.textContent = number1 % number2);
      }
      case "CLEAR": {
        return (output.textContent = ""), (num1.value = num2.value = "");
      }
    }
  })
);
