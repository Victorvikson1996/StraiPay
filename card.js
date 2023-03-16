// Generate a random integer between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Double every other digit starting from the right
function doubleEveryOther(arr) {
  return arr.map((digit, index) => {
    if ((arr.length - index) % 2 === 0) {
      const doubled = digit * 2;
      return doubled > 9 ? doubled - 9 : doubled;
    }
    return digit;
  });
}

// Generate a valid credit card number
function generateCreditCardNumber() {
  const digits = Array.from({ length: 9 }, () => randomInt(0, 9));
  const doubled = doubleEveryOther(digits);
  const sum = doubled.reduce((acc, digit) => acc + digit, 0);
  const checksum = sum % 10 === 0 ? 0 : 10 - (sum % 10);
  return digits.join("") + checksum;
}

// Check if a credit card number is valid
function isValidCreditCardNumber(number) {
  const digits = number.split("").map(Number);
  const checksum = digits.pop();
  const doubled = doubleEveryOther(digits);
  const sum = doubled.reduce((acc, digit) => acc + digit, 0);
  return (sum + checksum) % 10 === 0;
}

const number = generateCreditCardNumber();
console.log(number);
console.log(isValidCreditCardNumber(number)); // true or false
