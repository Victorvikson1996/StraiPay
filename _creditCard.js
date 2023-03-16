function generateCreditCardNumber() {
  let cardNumber = "";
  for (let i = 1; i <= 16; i++) {
    const digit = Math.floor(Math.random() * 10);
    cardNumber += digit.toString();
  }
  return cardNumber;
}

function isValidCreditCardNumber(cardNumber) {
  const digits = cardNumber.split("").map(Number);
  let sum = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    if (i % 2 === digits.length % 2) {
      digit *= 2;
      if (digit > 9) {
        digit = digit
          .toString()
          .split("")
          .reduce((a, b) => Number(a) + Number(b));
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
