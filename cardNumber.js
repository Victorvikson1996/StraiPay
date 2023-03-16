// Generate a valid credit card number
function generateCreditCardNumber() {
  let ccNum = "";
  for (let i = 0; i < 10; i++) {
    ccNum += Math.floor(Math.random() * 10); // Generate a random digit
  }
  const doubledDigits = [];
  for (let i = ccNum.length - 2; i >= 0; i -= 2) {
    let doubled = Number(ccNum[i]) * 2;
    if (doubled > 9) {
      doubled = doubled
        .toString()
        .split("")
        .reduce((acc, val) => acc + Number(val), 0);
    }
    doubledDigits.push(doubled);
  }
  const sum =
    doubledDigits.reduce((acc, val) => acc + val, 0) +
    ccNum
      .split("")
      .filter((val, index) => index % 2 === 0)
      .reduce((acc, val) => acc + Number(val), 0);
  const isValid = sum % 10 === 0;
  return isValid ? ccNum : generateCreditCardNumber(); // Recursively generate another number if not valid
}

// Check if a credit card number is valid
function isValidCreditCardNumber(ccNum) {
  const doubledDigits = [];
  for (let i = ccNum.length - 2; i >= 0; i -= 2) {
    let doubled = Number(ccNum[i]) * 2;
    if (doubled > 9) {
      doubled = doubled
        .toString()
        .split("")
        .reduce((acc, val) => acc + Number(val), 0);
    }
    doubledDigits.push(doubled);
  }
  const sum =
    doubledDigits.reduce((acc, val) => acc + val, 0) +
    ccNum
      .split("")
      .filter((val, index) => index % 2 === 0)
      .reduce((acc, val) => acc + Number(val), 0);
  return sum % 10 === 0;
}

const validCCNum = generateCreditCardNumber();
console.log(validCCNum); // e.g. "1234567890"

// const invalidCCNum = "1234567891";
// console.log(isValidCreditCardNumber(invalidCCNum)); // false

console.log(isValidCreditCardNumber(validCCNum)); // true
