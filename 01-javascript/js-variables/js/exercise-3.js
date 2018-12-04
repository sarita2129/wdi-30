/*

The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

*/

const currentAge = 43;
const deathAge = 85;

// Hotdogs per day
const amountPerDay = 7;
const amountPerYear = amountPerDay * 365.25; // Include leap years

const yearsRemaining = deathAge - currentAge;
const amountRequired = amountPerYear * yearsRemaining;

console.log(`You will need ${ amountRequired } to last you until the ripe old age of ${ deathAge }`);
