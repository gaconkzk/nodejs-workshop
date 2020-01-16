let MongoClient = require('mongodb').MongoClient

let username = process.env.DB_USER
let password = process.env.DB_PASS
let dbhost = process.env.DB_HOST_PORT
let database = process.env.DB_NAME

let dbAuth = username && password ? `${username}:${encodeURIComponent(password)}@` : '';
let dbProtocol = `mongodb${dbhost.indexOf(':') < 0 ? '+srv' : ''}`

let url = `${dbProtocol}://${dbAuth}${dbhost}`

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

async function _process(fn) {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true})
    if (!client) {
      return new Error('can\'t connect to db')
    }

    return await fn(client.db(database))
  } catch(err) {
    return err
  } finally {
    client.close()
  }
}

async function insertOne(collection, data) {
  let fn = async (db) => {
    let r = await db.collection(collection).insertOne(data)
    if (r.insertedCount > 0) {
      return r.ops[0]
    } else {
      return new Error(`Error inserted ${data}`)
    }
  }
  return await _process(fn)
}

async function find(collection, options) {
  let fn = async (db) => {
    return await db.collection(collection).find({}).toArray()
  }
  return await _process(fn)
}

module.exports = {
  insertOne,
  find
}
