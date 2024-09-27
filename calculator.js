document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display-input");
  const btns = document.querySelectorAll(".calculator-btn");
  function appendToDisplay(value) {
    display.value += value;
  }
  function clearDisplay() {
    display.value = "";
  }
  function clearEntry() {
    display.value = display.value.slice(0, -1);
  }
  //for error
  function calculateResult() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "not exist";
    }
  }
  btns.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText;
      switch (value) {
        case "=":
          calculateResult();
          break;
        case "DEL":
          clearEntry();
          break;
        case "AC":
          clearDisplay();
          break;
        default:
          appendToDisplay(value);
      }
    });
  });
});

//use for keybords
const display = document.getElementById("display-input");

function evaluateExpression(expression) {
  try {
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if ("0123456789+-*/.".includes(key)) {
    display.value += key;
  }
  if (key === "Enter") {
    evaluateExpression(display.value);
  }
  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  if (key === "Escape") {
    display.value = "";
  }
});
display.addEventListener("click", function () {
  display.focus();
});
