const app = require('./app.js')

describe('App', () => {

  test('should call the spy correctly', () => {
    var spy = jest.spyOn(app, 'handleSignup');

    spy('Micah', 25);
    expect(spy).toHaveBeenCalledWith('Micah', 25);

  })
})
