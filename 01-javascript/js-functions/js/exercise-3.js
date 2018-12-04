/*

The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

const calculateSupply = function (currentAge, amountPerDay) {
  const deathAge = 85;

  const amountPerYear = amountPerDay * 365.25; // Include leap years

  const yearsRemaining = deathAge - currentAge;
  const amountRequired = amountPerYear * yearsRemaining;

  // Dying people get a deathbed hotdog.
  console.log(`You will need ${ Math.ceil(amountRequired) } to last you until the ripe old age of ${ deathAge }`);
};

calculateSupply(43, 7);
// calculateSupply(43, 2);
// calculateSupply(80, 1);
