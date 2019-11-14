const fs = require('fs')

// simple writer
function write(filepath, data) {
    // TODO validate filepath, is it file, is it dir
    // throw error if not a valid file path
    fs.writeFileSync(filepath, data)
}

module.exports = {
    write
}
