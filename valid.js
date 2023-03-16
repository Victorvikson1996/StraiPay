// Generate a valid credit card number using Luhn algorithm
function generateCreditCardNumber() {
  // Start with a random 10 -digit number
  // let number = Math.floor(Math.random() * 900000000000000) + 100000000000000;
  let number = Math.floor(Math.random() * 9000000000) + 1000000000;

  // Apply Luhn algorithm to the first 15 digits
  let sum = 0;
  let shouldDouble = false;
  for (let i = 14; i >= 0; i--) {
    let digit = parseInt(number.toString().charAt(i));
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit = digit.toString().charAt(0) + digit.toString().charAt(1);
        digit = parseInt(digit);
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // Calculate the check digit to make the number valid
  let checkDigit = (10 - (sum % 10)) % 10;

  // Append the check digit to the number
  number += checkDigit;

  return number;
}

// Check if a credit card number is valid using Luhn algorithm
function isValidCreditCardNumber(number) {
  // Convert the number to a string
  number = number.toString();

  // Apply Luhn algorithm to all the digits
  let sum = 0;
  let shouldDouble = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i));
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit = digit.toString().charAt(0) + digit.toString().charAt(1);
        digit = parseInt(digit);
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // Check if the total modulo 10 is equal to 0
  return sum % 10 == 0;
}

console.log(isValidCreditCardNumber(3174422811));
// 3174422811 valid

//6136468785

// isValidCreditCardNumber(3174422811);
