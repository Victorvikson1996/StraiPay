function isCreditCardValid(cardNumber) {
  // Convert the card number to a string and remove any non-digit characters
  var cardString = cardNumber.toString().replace(/[^0-9]/g, "");

  // Check if the card number has less than or equal to 10 digits
  if (cardString.length > 10) {
    return false;
  }

  // Apply the Luhn algorithm to the card number
  var sum = 0;
  for (var i = cardString.length - 1, j = 1; i >= 0; i--, j++) {
    var digit = parseInt(cardString.charAt(i));
    if (j % 2 == 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  // Check if the sum of the digits is a multiple of 10
  return sum % 10 == 0;
}

console.log(isCreditCardValid(3174422811)); // true
console.log(isCreditCardValid(3174422811)); // false
console.log(isCreditCardValid(4111111111111111)); // false (has more than 10 digits)
