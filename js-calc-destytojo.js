const inputs = {
  first: null,
  second: null,
};
function printOutput(content) {
  document.querySelector("#result").textContent = content;
}
function handleAction(action) {
  switch (action) {
    case "sum":
      return inputs.first + inputs.second;
    case "sub":
      return inputs.first - inputs.second;
    case "mul":
      return inputs.first * inputs.second;
    case "div":
      return inputs.first / inputs.second;
    case "mod":
      return inputs.first % inputs.second;
    case "clear":
      return null;
  }
}
document.querySelector("#calc-data").addEventListener("input", (e) => {
  if (e.target.name) {
    inputs[e.target.name] = Number(e.target.value);
  }
});
document.querySelector("#actions").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.name) {
    const result = handleAction(e.target.name);
    printOutput(result);
  }
});
