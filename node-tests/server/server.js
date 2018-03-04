const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

// new route http get /users, returns array of users
// Give users a name property and age property

app.get('/users', (req, res) => {
  res.send([{
    name: 'Micah', age: 32
  }, {
      name: 'Leah', age: 33
    }, {
      name: 'Maya', age: 10
    }]);
});

app.listen(3000);
module.exports.app = app;
