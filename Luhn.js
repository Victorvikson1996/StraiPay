function luhnAlgorithm(number) {
  // Convert number to array of digits
  const digits = number.toString().split("").map(Number);

  // Double every second digit
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }

  // Add up all the digits
  const sum = digits.reduce((acc, val) => acc + val);

  // If the sum is divisible by 10, the number is valid
  return sum % 10 === 0;
}

console.log(luhnAlgorithm(2219797056)); // Output: true
