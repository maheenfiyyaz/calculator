const calculation = document.getElementById("calculation");
const result = document.getElementById("result");

function appendValue(value) {
  calculation.textContent += value;
}

function clearAll() {
  calculation.textContent = "";
  result.textContent = "0";
}

function clearEntry() {
  calculation.textContent = calculation.textContent.slice(0, -1);
}

function deleteLast() {
  calculation.textContent = calculation.textContent.slice(0, -1);
}

function calculate() {
  try {
    result.textContent = eval(calculation.textContent) || "0";
  } catch {
    result.textContent = "Error";
  }
}
