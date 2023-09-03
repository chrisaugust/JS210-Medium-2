// PROBLEM
// Write a function that takes an integer as argument and returns the
// next 'featured' number greater than the argument, returning an error
// message if there is no next featured number.
//
// A featured number is an odd number which is a multiple of 7, whose 
// digits all occur exactly once. 49 is a featured number, 98 is not (it
// isn't odd), 97 is not (not a multiple of 7), and 133 is not (3 appears
// twice).
//
// input/output: integer -> next featured number greater than integer
//
// requirements:
// - return value is an integer which is odd
// - return value is a multiple of 7
// - return value's digits occur only once in the number
// - return value should be greater than the argument
// - return value should be the next featured number after the argument
// - the largest possible featured number is 9876543201; return an error
//     message if there is no next featured number
//
// EXAMPLES
// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirements."
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// generate series of multiples of 7 greater than argument
//   - divide argument by 7, and increment by 1
//   - multiple previous by 7
// check if result of previous is odd
// check if result of previous has digits that occur only once
//   - convert to string
//   - check if set of unique characters has the same number of elements
//     as length of number string
//
// CODE
function featured(num) {
  let nextMultipleOfSeven = generateNextMultipleOfSeven(num);
  while (nextMultipleOfSeven <= 9876543201) {
    if (isOdd(nextMultipleOfSeven)) {
      if (digitsOccurOnlyOnce(nextMultipleOfSeven)) {
        return nextMultipleOfSeven; 
      }
    }
    nextMultipleOfSeven = generateNextMultipleOfSeven(nextMultipleOfSeven);
  }
  return "There is no possible number that fulfills those requirements.";
}

function generateNextMultipleOfSeven(num) {
  let currentMultiple = Math.floor(num/7);
  return (7 * (currentMultiple + 1));
}

function isOdd(num) {
  return (num % 2 !== 0)
}

function digitsOccurOnlyOnce(num) {
  let digits = String(num).split('');
  let uniqueDigits = new Set(digits)
  return (digits.length === uniqueDigits.size);
}
// TESTS
// console.log(isOdd(1) === true);
// console.log(isOdd(2) === false);
// console.log(generateNextMultipleOfSeven(6) === 7);
// console.log(generateNextMultipleOfSeven(8) === 14);
// console.log(generateNextMultipleOfSeven(21) === 28);
// console.log(digitsOccurOnlyOnce(123) === true);
// console.log(digitsOccurOnlyOnce(1233) === false);
console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543186) === 9876543201);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543201) === "There is no possible number that fulfills those requirements.");
