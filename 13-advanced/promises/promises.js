// Promises are an evolution of the idea of callbacks

const fs = require('fs'); // sync

// readFile is asynchronous:
// You must provide a callback to have any access to the content of the file
// and it must handle both success and failure.
// fs.readFile('example.txt', 'utf-8', (err, content) => {
//   if (err) {
//     throw err; // Failure: Crash the program
//   }
//
//   console.log(content); // Success: Print the content
// });

// Let's wrap fs.readFile to use a Promise.
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(content);
    });
  });
};

readFile('example.txt').then((c) => {
  console.log(c);
}).catch((err) => {
  console.error('There was an error', err);
});

// To look into: Promise.all(), Promise.race()
