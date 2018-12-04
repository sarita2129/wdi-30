/*

The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

*/

const tellFortune = function (jobTitle, geographicLocation, partnerName, numOfChildren) {
  // ES6: String interpolation
  const fortune = `You will be a ${ jobTitle } in ${ geographicLocation }, and married to ${ partnerName } with ${ numOfChildren } kids.`;
  console.log(fortune);
}

tellFortune('folk poet', 'New Guinea', 'Jane', 3);
tellFortune('hockey goalie', 'Canadia', 'Glenn', 2);
