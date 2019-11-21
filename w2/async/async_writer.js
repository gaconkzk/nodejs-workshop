const fs = require('fs')
const util = require('util')
const path = require('path')

const writeFile = util.promisify(fs.writeFile)

// simple writer
async function write(filepath, data) {
    // TODO validate filepath, is it file, is it dir
    // throw error if not a valid file path
    if ((path.extname(filepath) !== '.txt') && (path.extname(filepath) !== '.json')) {
        console.log('Invalid file path');
    }
    else{
        await writeFile(filepath, data)
    }
}

module.exports = {
    write
}
