// PROBLEM
// Write a function that takes a year as an argument and returns the number
// of 'Friday the 13ths' in that year. Assume the year is greater than
// 1752 (when the Gregorian Calendar was adopted by the UK). Also assume
// that the same calendar will remain in use moving forward.
//
// EXAMPLES
// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2
//
// DATA STRUCTURE
// Date
//
// ALGORITHM
// - iterate over months in a given year
// - for each month, get the day that falls on the 13th
// - count the number of Fridays that coincide with the 13th
// - return the count
//
// CODE
function fridayThe13ths(year) {
  let date;
  let count = 0; // count of Fridays which fall on the 13th

  for (let month = 1; month <= 12; month += 1) {
    date = new Date(year, month - 1, 13); // months are zero indexed
    if (date.getDay() === 5) {
      count += 1;
    }
  }

  return count;
}

// TESTS
console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);
