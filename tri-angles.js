// PROBLEM
// Write a function that takes the three angles of a triangle
// as arguments and returns one of the following classifications:
// 'right', 'acute', 'obtuse', or 'invalid'
//
// Assume that all angles have integer values, and that arguments are
// in degrees.
//
// rules:
// right: one angle is 90 degrees
// acute: all three angles are less than 90 degrees
// obtuse: one angle is greater than 90 degrees
// 
// implicit: angles must be greater than 0
//
// input: 3 integer values (eg. 90, 45, 45)
// output: triangle classification (eg. 'right')
//
// mental model:
// the function will take three integer values representing the angles
// of a triangle, will return 'invalid' for any set of angles which don't
// sum to 180 degrees, 'right' for any valid set of angles containing one
// 90 degree angle, 'acute' for a set of angles with values all less than
// 90 degrees, and 'obtuse' for a set of angles with one value greater than
// 90 degrees
//
// EXAMPLES
// triangle(60, 70, 50);       // "acute"
// triangle(30, 90, 60);       // "right"
// triangle(120, 50, 10);      // "obtuse"
// triangle(0, 90, 90);        // "invalid"
// triangle(50, 50, 50);       // "invalid"
//
// DATA STRUCTURES
// Array (to make use of Array.prototype.reduce)
//
// ALGORITHM
// - create an array with the arguments
// - sum the elements in the array to insure that the angles equal 180
//    - return invalid if this is not the case
// - find the max angle
// - if max angle is greater than 90, return 'obtuse'
// - if max angle is 90, return 'right'
// - return 'acute'
//
// CODE
function triangleIsValid(a1, a2, a3) {
  let angles = [a1, a2, a3];
  if (angles.some(angle => angle === 0)) { 
    return false;
  }
  else if (angles.reduce((sum, angle) => sum += angle, 0) !== 180) {
    return false;
  }
  return true;
}

function triangle(a1, a2, a3) {
  let angles = [a1, a2, a3];
  let maxAngle = Math.max(a1, a2, a3);

  if (triangleIsValid(...angles)) {
    if (maxAngle === 90) {
      return 'right';
    } else if (maxAngle > 90) {
      return 'obtuse';
    } else {
      return 'acute';
    }
  } else {
    return 'invalid';
  }
}

// TESTS
console.log(triangle(60, 70, 50) === "acute");
console.log(triangle(30, 90, 60) === "right");
console.log(triangle(120, 50, 10) === "obtuse");
console.log(triangle(0, 90, 90) === "invalid");
console.log(triangle(50, 50, 50) === "invalid");
