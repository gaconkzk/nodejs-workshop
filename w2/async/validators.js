const fs = require('fs')
const path = require('path')
const util = require('util')

const { realPath, ask } = require('./utils.js')

const exists = util.promisify(fs.exists)

const fileValidator = async (filepath) => {
  let abspath = realPath(filepath)

  // check directory existed
  let dirname = path.dirname(abspath)
  let dirNotExisted = !(await exists(dirname))
  if (dirNotExisted) {
    console.error(`Directory ${path.dirname(abspath)} is not existed`)
    return false
  }

  let fileExisted = await exists(abspath)
  let answer = fileExisted &&
    await ask(`You are overriding the origin file: ${abspath}\n'Y' to continue(Y/N)`)

  if (answer && answer.toLowerCase() === 'n') {
    console.log('Canceled!')
    process.exit(-1)
  }

  return !answer || answer.toLowerCase() === 'y'
}

module.exports = {
  fileValidator
}
