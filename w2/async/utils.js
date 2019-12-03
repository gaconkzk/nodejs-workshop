const path = require('path')

// file and path related
const realPath = (filepath) => path.isAbsolute(filepath) ? filepath : path.resolve(__dirname, 'test', filepath)

// readline and question related
const question = (rl, str) => new Promise(resolve => rl.question(str, resolve))

module.exports = {
  realPath,
  question
}
