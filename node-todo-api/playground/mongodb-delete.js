// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/ToDoApp';
const dbName = 'ToDoApp';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.error(`${err.name} - MongoDB failed to connect with message:\n${err.message}`);
    return;
  }
  console.log('Connected to MongoDB Server');
  const db = client.db(dbName);

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  client.close();
});
