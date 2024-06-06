function calculate() {
  let num1;
  let num2;
  let result;
  let operation;

  num1 = document.getElementById("firstOperand").value;
  num2 = document.getElementById("secondOperand").value;

  result = document.getElementById("result").value;
  operation = document.getElementById("operation").value;

  console.log(operation);

  if (operation == "multiplcation") {
    result = num1 * num2;
  }
  if (operation == "division") {
    result = num1 / num2;
  }
  if (operation == "addition") {
    result = num1 + num2;
  }
  if (operation == "subtraction") {
    result = num1 - num2;
  }
  document.getElementById("result").innerHTML = `Result: ${result}`;
}
document.getElementById("btn").addEventListener("click", calculate);
