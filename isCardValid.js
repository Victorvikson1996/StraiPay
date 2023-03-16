function isValidCreditCardNumber(creditCardNumber) {
  // Convert the credit card number to an array of digits
  var digits = creditCardNumber.toString().split("").map(Number);

  // Double every second digit, starting from the rightmost digit
  for (var i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;

    // If doubling results in a two digit number, add the digits together
    if (digits[i] > 9) {
      digits[i] = digits[i]
        .toString()
        .split("")
        .map(Number)
        .reduce(function (a, b) {
          return a + b;
        });
    }
  }

  // Add up all the digits
  var sum = digits.reduce(function (a, b) {
    return a + b;
  });

  // Check if the sum modulo 10 is equal to 0
  return sum % 10 == 0;
}

console.log(isValidCreditCardNumber("4111111111111111")); // returns true
// isValidCreditCardNumber("4111111111111"); // returns false
// isValidCreditCardNumber("4012888888881881"); // returns true
// isValidCreditCardNumber("378282246310005"); // returns true
// isValidCreditCardNumber("6011111111111117"); // returns true
// isValidCreditCardNumber("5105105105105100"); //
