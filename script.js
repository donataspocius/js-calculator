"use strict";

let sumBtn = document.querySelector("#sumBtn");
let subBtn = document.querySelector("#subBtn");
let divBtn = document.querySelector("#divBtn");
let mulBtn = document.querySelector("#mulBtn");
let modBtn = document.querySelector("#modBtn");
let clearBtn = document.querySelector("#clearBtn");
let output = document.querySelector("#output");
let btns = document.querySelectorAll(".btn");

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);

    switch (btn.textContent) {
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
    }
  })
);

clearBtn.addEventListener("click", function () {
  num1.value = num2.value = "";
  output.textContent = "";
});

// sumBtn.addEventListener("click", function () {
//   let number1 = Number(num1.value);
//   let number2 = Number(num2.value);
//   return (output.textContent = number1 + number2);
// });

// subBtn.addEventListener("click", function () {
//   let number1 = Number(num1.value);
//   let number2 = Number(num2.value);
//   return (output.textContent = number1 - number2);
// });

// divBtn.addEventListener("click", function () {
//   let number1 = Number(num1.value);
//   let number2 = Number(num2.value);
//   return (output.textContent = number1 / number2);
// });

// mulBtn.addEventListener("click", function () {
//   let number1 = Number(num1.value);
//   let number2 = Number(num2.value);
//   return (output.textContent = number1 * number2);
// });

// modBtn.addEventListener("click", function () {
//   let number1 = Number(num1.value);
//   let number2 = Number(num2.value);
//   return (output.textContent = number1 % number2);
// });
