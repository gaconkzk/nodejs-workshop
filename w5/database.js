require('dotenv').config()

let MongoClient = require('mongodb').MongoClient
var cryptoJS = require('crypto-js');

// let username = process.env.DB_USER
// let password = process.env.DB_PASS
let dbhost = process.env.DB_HOST_PORT
let database = process.env.DB_NAME

let url = `mongodb://${dbhost}/${database}`

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });
// Use connect method to connect to the Server
client.connect(function(err) {
  if (err) {
      console.error('Error', err)
  } else {
    console.log("Connected successfully to server")
    const db = client.db(database);
    insertUsers(db, function() {
      updateUsers(db, function() {
        removeUsers(db, function() {
          // findUsers(db, function() {
            client.close();
          // });
        });
      });
    });
  }


//   const db = client.db(dbName);

// TODO
  // use a database using dbName
  // create a collections name `users`
  // insert at least 3 users:
  /*
      {
          "fullName": "A Thi No",
          "username": "athino",
          "pass": "#%^%$&", <-- encrypted using md5
      }
   */
// document sample: https://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/
  // update at least 1 users
  // delete a user
  // find a user with fullname contain 'Thi'
  client.close()
})

const insertUsers = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Insert some documents
  collection.insertMany([
    { fullName : 'A Thi No', username : 'athino', pass : (cryptoJS.MD5('athino').toString()) },
    { fullName : 'B Thi No', username : 'bthino', pass : (cryptoJS.MD5('bthino').toString()) },
    { fullName : 'C Thi No', username : 'cthino', pass : (cryptoJS.MD5('cthino').toString()) },
  ], function(err, result) {
    console.log("Inserted 3 users into the collection");
    callback(result);
  });
}

const updateUsers = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Update
  collection.updateOne(
    { username : 'athino' },
    { $set: { fullName : 'nguyen thi A' } }, function(err, result) {
      console.log("Updated the users with the field username equal to anthino");
      callback(result);
  });  
}

const removeUsers = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Delete document where a is 3
  collection.deleteOne({ fullName : 'C Thi No' }, function(err, result) {
    console.log("Removed the document with the field username equal to anthino");
    callback(result);
  });    
}

const findUsers = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Find some documents
  collection.find({fullName: { $regex: /^A/ }}).toArray(function(err, docs) {
    console.log("Found the following records", err);
    console.log(docs);
    callback(docs);
  });
}