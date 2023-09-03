// PROBLEM
// Write a function that computes the difference between the square of the
// sum of the first n positive integers and the sum of the squares of the
// first n positive integers
//
// EXAMPLES
// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150
//
// input: integer n
// output: integer representing difference between 1**2 ... n**2 
//   and (1 + 2 + ... n)**2
//
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// generate sequence of integers from 1 to n, stored in an array
// map and reduce to produce sum of squares
// reduce and square to produce squared sum
// return difference of values produced by steps 2 and 3
//
// argument: 3
// 1) [1, 2, 3]
// 2) [1, 2, 3] --> ][1, 4, 9] --> 14
// 3) [1, 2, 3] --> 6 --> 36
// 4) 36 - 14 --> 22
//
// CODE
function sumSquareDifference(n) {
  let sequence = [];
  for (let i = 1; i <= n; i += 1) {
    sequence.push(i);
  }
  return Math.abs(squareThenSum(sequence) - sumThenSquare(sequence))
}

function squareThenSum(arr) {
  return arr.map(elem => elem ** 2).reduce((sum, elem) => sum += elem, 0);
}

function sumThenSquare(arr) {
  return arr.reduce((sum, elem) => sum += elem, 0)**2
}
// TESTS
console.log(squareThenSum([1, 2, 3]) === 14);
console.log(sumThenSquare([1, 2, 3]) === 36);
console.log(sumSquareDifference(3) === 22); // --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) === 2640);
console.log(sumSquareDifference(1) === 0);
console.log(sumSquareDifference(100) === 25164150);
