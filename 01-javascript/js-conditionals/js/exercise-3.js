/* The Grade Assigner

Write a function named assignGrade that:

  takes 1 argument, a number score.
  returns a grade for the score, either "A", "B", "C", "D", or "F".

Call that function for a few different scores and log the result to make sure it works.

*/

const assignGrade = function (score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(`The grade for 100 is ${ assignGrade(100) }`);
console.log(`The grade for 85 is ${ assignGrade(85) }`);
console.log(`The grade for 75 is ${ assignGrade(75) }`);
console.log(`The grade for 65 is ${ assignGrade(65) }`);
console.log(`The grade for 15 is ${ assignGrade(15) }`);
