// PROBLEM
// Implement bubble sort -- write a function that takes an array as argument
// and sorts that array 'in-place' using bubble sort. Assume that the array
// contains at least two elements.
//
// input: array
// output: mutated array, sorted in-place
//
// implicit requirements:
// - function should handle numbers and strings
// - if numbers and strings are in the same array, 
//     sort numbers before strings
//
// questions:
// - what if array contains numbers and strings
//
// mental model:
// write a function that takes an array of strings, numbers, or both,
// sorts that array in place using bubble sort (multiple passes through 
// the array, swapping pairs of elements), with numbers coming before
// strings, and returns the sorted array
//
// EXAMPLES
// const array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]
// 
// const array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]
// 
// const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// 0) set 'sorted' and 'swapped' variables to false
// 1) while sorted is false, iterate through array
// 2) compare current element with next element, and swap them if first
//    element is greater than second
//    1) set temp variable to first element
//    2) set first element to second element
//    3) set second element to temp variable
//    4) set swapped element to true
// 3) check if swapped is true, if so, set sorted to true
// 4) return sorted array
//
// manual run:
// array = [2, 3, 1]
//
// let sorted = false;
//
// while loop
//   swapped = false
//   for loop
//     pass 1: [2, 3, 1]
//             [2, 1, 3]
//             swapped  = true
//     pass 2: [1, 2, 3]
//             swapped = true
//             [1, 2, 3]
//     pass 3: [1, 2, 3]
//             [1, 2, 3]
//             swapped = false
//             sorted = true
//
// return [1, 2, 3]
//
// CODE
function bubbleSort(array) {
  let sorted = false;
  while (sorted === false) {
    let swapped = false;
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
        swapped = true;
      } else if (typeof array[i] === 'string' 
                 && typeof array[i+1] !== 'string') {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
    if (swapped === false) {
      sorted = true;
    }
  }
  return array;
}

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
//
// TESTS
const array1 = [5, 3];
bubbleSort(array1);
console.log(JSON.stringify(array1) === JSON.stringify([3, 5]));

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(JSON.stringify(array2) === JSON.stringify([1, 2, 4, 6, 7]));

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(JSON.stringify(array3) === JSON.stringify(["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]));

const array4 = ["Adam", 1, 3, "Eve", 2];
bubbleSort(array4);
console.log(JSON.stringify(array4) === JSON.stringify([1, 2, 3, "Adam", "Eve"]));

const array5 = [5, 4, 3, 2, 1];
bubbleSort(array5);
console.log(JSON.stringify(array5) === JSON.stringify([1, 2, 3, 4, 5]));

const array6 = [5.3, 1.2, 3.7, 4, 'Steve', 'Enderman'];
bubbleSort(array6);
console.log(JSON.stringify(array6) === JSON.stringify([1.2, 3.7, 4, 5.3, 'Enderman', 'Steve']));

