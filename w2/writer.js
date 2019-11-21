const fs = require('fs')
const path = require('path')


// simple writer
function write(filepath, data) {
    // TODO validate filepath, is it file, is it dir
    // throw error if not a valid file path
    if ((path.extname(filepath) !== '.txt') && (path.extname(filepath) !== '.json')) {
        console.log('Invalid file path');
    }
    else{
        fs.writeFileSync(filepath, data)
    }
}

module.exports = {
    write
}
