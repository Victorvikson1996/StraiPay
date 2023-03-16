function isValidLuhnNumber(number) {
  // convert the number to an array of digits and reverse it
  const digits = Array.from(String(number), Number).reverse();

  // double every second digit and add up the digits of the resulting products
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit = (digit % 10) + Math.floor(digit / 10);
      }
    }
    sum += digit;
  }

  // check if the total modulo 10 is equal to 0
  return sum % 10 === 0;
}

console.log(isValidLuhnNumber(79927398713)); // true
console.log(isValidLuhnNumber(79927398710)); // false
