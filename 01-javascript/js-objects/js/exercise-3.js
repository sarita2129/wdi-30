/* The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

*/

const oBrother = {
  title: "O! Brother, Where Art Thou?",
  duration: 127,
  stars: ["George Clooney", "Gillian Welch", "John Goodman", "That Really Slinty Guy"]
};

const alien = {
  duration: 116,
  title: "Alien",
  stars: ["Sigourney Weaver", "John Hurt", "A Guy In An Alien Costume"]
};

const movieInfo = function (movie) {
  const info = `${ movie.title } lasts for ${ movie.duration } minutes. Stars: ${ movie.stars.join(', ') }`;
  return info;
};

console.log( movieInfo(oBrother) );
console.log( movieInfo(alien) );
