/*

The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:

takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

*/

// conversionRate defaults to 7 unless explicitly called with another rate.
const calculateDogAge = function (puppyAge, conversionRate=7) {
  const dogYears = puppyAge * conversionRate; // 7 dog years to a human year.
  console.log(`Your doggie is ${ dogYears } years old in dog years!`);
};

calculateDogAge(7);
calculateDogAge(8.7);
calculateDogAge(9);
