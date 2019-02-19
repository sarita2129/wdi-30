// recreate cat program in JS

const fs = require('fs'); // From the node standard library

// Sync means this is a blocking function.
// const fileData = fs.readFileSync('flintstones.txt', 'utf-8');
// console.log(fileData);

// Asynchronous IO
// Better efficiency because it's non-blocking.
// Callback functions in node.js usually receive:
//   error param (node.js is usually "error first")
//   data param

fs.readFile('flintstones.txt', 'utf-8', function (error, data) {
  if (error) {
    return console.error(error); // This is a bit wanky.
  }
  console.log(data);
});

// TODO: Rewrite this code to use promises.
