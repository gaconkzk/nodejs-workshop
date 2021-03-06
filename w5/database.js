require('dotenv').config()

let MongoClient = require('mongodb').MongoClient

let username = process.env.DB_USER
let password = process.env.DB_PASS
let dbhost = process.env.DB_HOST_PORT
let database = process.env.DB_NAME

let dbAuth = username && password ? `${username}:${encodeURIComponent(password)}@` : '';
let dbProtocol = `mongodb${dbhost.indexOf(':') < 0 ? '+srv' : ''}`

let url = `${dbProtocol}://${dbAuth}${dbhost}/${database}`

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  if (err) {
      console.error('Error', err)
  } else {
    console.log("Connected successfully to server")
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
