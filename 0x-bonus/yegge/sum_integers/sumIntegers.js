const fs = require('fs'); // File System code from Node std library.

const sumIntegers = function (filename) {
  // TODO: Try this with fs.readFile -- the asynchronous version.
  const file = fs.readFileSync(filename, 'utf-8');
  return file.split('\n').reduce(function (acc, n) {
    return Number(acc) + Number(n);
  });

  // file.split('\n').forEach(function (line) {
  //   const n = Number(line);
  //   sum += n;
  // });
  // return sum;
};

console.log( sumIntegers('./integers.txt') );
