const utils = require('./utils');

test('should add two numbers', () =>{
  var res = utils.add(33, 11);
  expect(res).toBe(44);
});

test('it should async add two numbers', async () => {
  expect.assertions(1);
  var res = await utils.asyncAdd(3, 5);
  expect(res).toEqual(8);

});


test('should square a number', () => {
  var res = utils.square(4);
  expect(res).toBe(16);
})

test('should set a first and last name', () => {
  var user = {location: 'Phoenixville', age: 25};
  var res = utils.setName(user, 'Micah Magruder');

  expect(res.firstName).toEqual('Micah');
  expect(res.lastName).toEqual('Magruder');
});
