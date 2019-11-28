const fs = require('fs')

// simple writer
function write(filepath, data) {
    // TODO validate filepath, is it file, is it dir
    // throw error if not a valid file path
    try {
        if (fs.existsSync(filepath) && fs.lstatSync(filepath).isFile()) {
            fs.writeFileSync(filepath, data)
            console.log("Writing success")
        } else {
            throw new Error('Invalid file path')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    write
}
