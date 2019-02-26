// const doSecretThingWithConfidentialInfo = function () {
//   const password = 'swordfish'; // This variable is still visible within showPassword VIA the closure.
//
//   return function () {
//     console.log( 'The password is', password );
//   };
//
// };
//
// const passwordShower = doSecretThingWithConfidentialInfo();

// let id = 0;
//
// const nextID = function () {
//   return id++; // Returns and increments the ID.
// };

let id = 0;

const idMaker = function () {
  // set up an initial ID:
  let id = 0;

  // return a function which THROUGH A CLOSURE will still have access to that id.
  return function () {
    return id++; // id persists through the closure.
  }
};

const nextID = idMaker();

const brothers = [
  {name: 'Groucho', id: nextID()},
  {name: 'Harpo', id: nextID()},
  {name: 'Chico', id: nextID()}
];

// HTML Tag Demo ///////////////////////////////////////////////////////////////
// const p = function (content) {
//   return '<p>' + content + '</p>';
// };
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// };
//
// const h2 = function (content) {
//   return '<h2>' + content + '</h2>';
// };

const tag = function (tagName) {
  return function (content) {
    return `<${ tagName }>${content}</${ tagName }>`;
  };
};

const p = tag('p');
const h1 = tag('h1');
const h2 = tag('h2');
const span = tag('span');
const div = tag('div');

// jQuery code might also use closures without you thinking much about it
$(document).ready(function () {
  const mySecretPassword = 'chicken';

  $('button').on('click', function () {
    // mySecretPassword persists in this function via the closure.
    console.log('Here is the secret password', mySecretPassword);
  });

  console.log('The document ready function is over');
});
