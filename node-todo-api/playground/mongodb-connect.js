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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.error(`Unable to insert todo\n ${err.message}`);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location string)

  // db.collection('Users').insertOne({
  // //  _id: 123,
  //   name: 'Micah',
  //   age: 32,
  //   location: 'Phoenixville, PA'
  //   }, (err, result) => {
  //     if (err){
  //       return console.error(`Unable to insert user\n ${err.message}`);
  //     }
  //     console.log(result.ops[0]._id.getTimestamp());
  // });
  client.close();
});
