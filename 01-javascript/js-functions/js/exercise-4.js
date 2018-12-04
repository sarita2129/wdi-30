/*
The Geometrizer

Create 2 functions that calculate properties of a circle.

Create a function called calcCircumference:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".*/

const calcCircumference = function (radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${ circumference.toFixed(4) }`);
};

calcCircumference(4);

const calcArea = function (radius) {
  const area = Math.PI * radius * radius; // area is pi * r^2
  console.log(`The area is ${ area.toFixed(4) }`);
};

calcArea(4);
