const db = require('./db')

async function register(req, res) {
  // todo server side validation
  let account = req.body

  try {
    let result = await db.insertOne('account', account)
    // may be not success
    res.status(200).json(result)
  } catch(err) {
    console.error(err)
    res.status(500).json(err)
  }
}

async function list(_, res) {
  // todo limit/offset paging
  try {
    let accounts = await db.find('account', {})
    res.status(200).json(accounts)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
}

module.exports = {
  register,
  list
}
