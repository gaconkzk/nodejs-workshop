const fs = require('fs')
const path = require('path')
const util = require('util')

const readline = require('readline')

const { realPath, question } = require('./utils.js')

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
  let answer = null
  if (fileExisted) {
    const rl = readline.createInterface({ input: process.stdin , output: process.stdout })
    answer = await question(rl, `You are override the origin file: ${abspath} (Y/N)`)
    rl.close()
  }

  if (answer.toLowerCase() === 'n') {
    console.log('Canceled!')
    process.exit(-2)
  }

  return !answer || answer.toLowerCase() === 'y'
}

module.exports = {
  fileValidator
}
