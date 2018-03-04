module.exports.add = (a, b) => a + b;
modul.exports.square = (x) => x * x ;

function asyncTimeout(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

module.exports.asyncAdd = async function asyncAdd(a, b) {
  var x = await asyncTimeout(a + b);
  return x;
}

module.exports.asyncSquare = async function asyncSquare(x) {
  var x = await asyncTimeout(x * x);
  return x;
}

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
