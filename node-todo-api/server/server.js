var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var time = Date.now();

var newTodo = new Todo({
  text: 'Cook Dinner',
  completed: true,
  completedAt: "time"
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc)
  process.exit(0)
}, (e) => {
  console.error('Unable to save todo', e)
  process.exit(1)
});
