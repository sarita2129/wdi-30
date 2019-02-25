const a = [3, 76, 83, 20, 97, 23, 19, 34, 87, 30, 92, 100, 94, 78, 13, 86, 51, 83, 47, 90]

// TODO: recursive solution
// const largest = (integers) => {
//   let max = -Infinity;
//
//   integers.forEach((n) => {
//     if (n > max) {
//       max = n;
//     }
//   });
//
//   return max;
// };

// You need a lot of coffee to understand this.
// const largest = (integers) => integers.reduce((max, n) => n > max ? n : max);

const largest = (integers) => {
  return integers.reduce((max, n) => {
    if (n > max) {
      return n;
    } else {
      return max;
    }
  });
}


console.log( Math.max( ...a ) ); // Math.max expects a list not an array so we need to use the spread operator.
console.log( largest(a) );
