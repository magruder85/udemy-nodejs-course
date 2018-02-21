// Regular arrow function

var square = (x) => {
  var result = x*x;
  return result;
};

// simplied arrow function
var square_arrow = (x) => x * x;

console.log(square(9));
console.log(square_arrow(4));


var user = {
  name: 'Micah',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
