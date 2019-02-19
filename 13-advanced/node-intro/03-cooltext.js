const readline = require('readline'); // Standard library
const chalk = require('chalk'); // npm install chalk
const figlet = require('figlet');

// Seriously, it's this much trouble to read text from the keyboard.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter text for enhancement: ', (response) => {
  console.log(
    chalk.green(
      figlet.textSync(response, {
        font: 'slant',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
  rl.close();
});
