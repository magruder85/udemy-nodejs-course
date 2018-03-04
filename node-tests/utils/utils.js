module.exports.add = (a, b) => a + b;

// module.exports.asyncAdd = return new Promise(resolve => {
//    (a, b, callback) => {
//   setTimeout(() => {
//     resolve(a + b);
//   }, 1000);
// };
// });


function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

module.exports.asyncAdd = async function asyncAdd(a, b) {
  var x = await resolveAfter2Seconds(a + b);
  return x;
}

module.exports.square = (x) => x * x ;

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
