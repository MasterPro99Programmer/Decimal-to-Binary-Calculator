const display = document.getElementById('display');
const convertBtn = document.getElementById('convert');
let resuler = document.getElementById("resule")

convertBtn.addEventListener('click', () => {
  const binaryInput = display.value;
  let decimalValue;

  try {
    decimalValue = parseInt(binaryInput, 2);  // Convert binary to decimal
    if (isNaN(decimalValue)) {  // Check for invalid input
      throw new Error('Invalid binary number');
    }
  } catch (error) {
    alert(error.message);
    display.value = '';  // Clear display on error
    return;
  }
  resuler.textContent = decimalValue
  display.value = "";  // Update display with decimal value
});

// Handle button clicks for numbers and clear (optional)
const buttons = document.querySelectorAll('.number, .operator');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    if (value === 'clear') {
      display.value = '';
    } else {
      display.value += value;
    }
  });
});
