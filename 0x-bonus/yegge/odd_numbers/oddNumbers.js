// Write function to print the odd numbers from 1 to 99.

// const printOddNumbers = (upperBound=99) => {
//   const odd = (num) => num % 2 !== 0;
//
//   for (let n = 1; n <= upperBound; n++) {
//     if (odd(n)) {
//       console.log( n );
//     }
//   }
// };

const printOddNumbers = (upperBound=99) => {
  for (let n = 1; n <= upperBound; n += 2) {
    console.log( n );
  }
};

printOddNumbers();
