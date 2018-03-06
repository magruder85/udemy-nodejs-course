const utils = require('./utils');

describe('Utils', () => {

  describe('#math_with_no_delay', () => {
    test('should add two numbers', () =>{
      var res = utils.add(33, 11);
      expect(res).toBe(44);
    });

    test('should square a number', () => {
      var res = utils.square(4);
      expect(res).toBe(16);
    });
  });

  describe('#math_with_delay', () => {
    test('should async add two numbers', async () => {
      expect.assertions(1);
      var res = await utils.asyncAdd(3, 5);
      expect(res).toEqual(8);
    });

    test('should async square a number', async () => {
      expect.assertions(1);
      var res = await utils.asyncSquare(5);
      expect(res).toEqual(25);
    });
  });

  describe('#playground_tests', () => {
    test('should set a first and last name', () => {
      var user = {location: 'Phoenixville', age: 25};
      var res = utils.setName(user, 'Micah Magruder');
      expect(res.firstName).toEqual('Micah');
      expect(res.lastName).toEqual('Magruder');
    });
  });
});
