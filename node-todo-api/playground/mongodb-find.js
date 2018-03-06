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
//  db.collection('Todos').find({_id: new ObjectID('5a9e0520cc686fb590b38193')}).toArray().then((docs) => {
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  //  });

  db.collection('Users').find().count().then((count) => {
    console.log(`User count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch Users', err);
   });

   db.collection('Users').find().toArray().then((docs) => {
     console.log(docs);
   }, (err) => {
     console.log('Unable to fetch Users', err);
    });

  client.close();
});
