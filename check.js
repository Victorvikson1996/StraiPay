function generateCreditCardNumber() {
  // Generate a random 10-digit number
  let num = Math.floor(Math.random() * 10000000000);

  // Convert the number to an array of digits
  let digits = num.toString().split("").map(Number);

  // Starting from the rightmost digit, double the value of every second digit
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;

    // If doubling of a number results in a two digit number, add the digits of the product to get a single digit number
    if (digits[i] > 9) {
      digits[i] = digits[i]
        .toString()
        .split("")
        .reduce((a, b) => Number(a) + Number(b), 0);
    }
  }

  // Take the sum of all the digits
  let sum = digits.reduce((a, b) => a + b, 0);

  // If the total modulo 10 is equal to 0, the number is valid
  if (sum % 10 == 0) {
    // Convert the array of digits back to a string and return it
    const number = num.toString();
    console.log(number, "Credit Card is  valid");
    return number;
  } else {
    // If the number is not valid, generate a new one recursively

    return generateCreditCardNumber();
  }
}

// function run
console.log(generateCreditCardNumber());
