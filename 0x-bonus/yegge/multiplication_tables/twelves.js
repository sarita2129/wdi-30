// Print out the grade-school multiplication table up to 12x12

// TODO: Write or find an sprintf()
const twelveTimesTable = function () {
  for (let i = 0; i <= 12; i++) {
    console.log( `${ i } x 12 = ${ i * 12 }` );
  }
};

twelveTimesTable();
