// Generate a valid credit card number
function generateCreditCardNumber() {
  let num = "";
  for (let i = 0; i < 10; i++) {
    num += Math.floor(Math.random() * 10);
  }
  const sum = num
    .split("")
    .map((digit, index) => {
      let doubled = digit * (index % 2 === 1 ? 2 : 1);
      if (doubled > 9) {
        doubled = doubled
          .toString()
          .split("")
          .reduce((acc, val) => parseInt(acc) + parseInt(val), 0);
      }
      return doubled;
    })
    .reduce((acc, val) => acc + val, 0);
  const valid = sum % 10 === 0;
  return valid ? num : generateCreditCardNumber();
}

// Check if a credit card number is valid
function validateCreditCardNumber(num) {
  const sum = num
    .split("")
    .map((digit, index) => {
      let doubled = digit * (index % 2 === 1 ? 2 : 1);
      if (doubled > 9) {
        doubled = doubled
          .toString()
          .split("")
          .reduce((acc, val) => parseInt(acc) + parseInt(val), 0);
      }
      return doubled;
    })
    .reduce((acc, val) => acc + val, 0);
  return sum % 10 === 0;
}

const number = generateCreditCardNumber();
console.log(number, "NUMBER");

// Check if a credit card number is valid
const isValid = validateCreditCardNumber(number);
console.log(isValid);
