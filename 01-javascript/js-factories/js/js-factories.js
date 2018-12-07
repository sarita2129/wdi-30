// n: name, a: age, f: furColor
const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline',
    meow: function () {
      // console.info( this );
      console.log('Meow, my name is ' + this.name); // self
    }
  };
};

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white')
];

for (let i = 0; i < cuteCats.length; i++) {
  console.log( cuteCats[i].furColor );
}

// Prototypal Inheritance ////////////////////////////////////////////////////
// Interesting/Historic BUT NOT SUPER IMPORTANT TODAY

// Capital C in Cat denotes that this is a Cat constructor
const Cat = function (n, a, f) {
  // the "this" object is created automagically for you by JS
  this.name = n;
  this.age = a;
  this.furColor = f;
  this.meow = function () {
    console.log("Meow, my name is " + this.name)
  }
  // no need for a return statement! That also happens automagically.
}

const cooper = new Cat('Cooper', 3, 'striped');
const audrey = new Cat('Audrey', 3, 'striped');

cooper.meow();

Cat.prototype.eat = function (food) {
  console.log('Yum I love to eat ' + food);
};

cooper.eat('brown mushy stuff');
audrey.eat('brown jelly stuff');

Cat.prototype.species = 'feline';
