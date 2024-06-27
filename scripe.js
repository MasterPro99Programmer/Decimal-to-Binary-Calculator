let decimalInput = document.getElementById('decimalInput');
let binaryOutput = document.getElementById('binaryOutput');

function addDigit(digit) {
  decimalInput.value += digit;
}

function clearInput() {
  decimalInput.value = '';
}

function deleteDigit() {
  let currentValue = decimalInput.value;
  decimalInput.value = currentValue.substring(0, currentValue.length - 1);
    global.currentValue
}

function convertToBinary() {
  let decimalValue = parseInt(decimalInput.value);
  if (isNaN(decimalValue)) {
    alert('Please enter a valid decimal number.');
    return;
  }

  let binaryResult = decimalValue.toString(2);
  binaryOutput.textContent = 'Binary: ' + binaryResult;
  clearInput()
}
