const fs = require('fs')
const util = require('util')

const { realPath } = require('./utils.js')

const writeFile = util.promisify(fs.writeFile)

// simple writer
async function write(filepath, data) {
  await writeFile(realPath(filepath), data)
}

module.exports = {
  write
}

