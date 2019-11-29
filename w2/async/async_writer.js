const fs = require('fs')
const util = require('util')

const writeFile = util.promisify(fs.writeFile)

// simple writer
async function write(filepath, data) {
    // TODO validate filepath, is it file, is it dir
    // throw error if not a valid file path
    let dirTemp = filepath.split('\\')
    let dir = dirTemp.slice(0, dirTemp.length-1).join('\\');
    let file = dirTemp[dirTemp.length-1]
    if (dir.length > 1) {
      if (fs.existsSync(dir) && fs.statSync(dir).isDirectory() && !fs.existsSync(filepath)) {
        await writeFile(filepath, data)
      } else {
        throw ('Invalid Filepath')
    
      }
    } else if (!fs.existsSync(filepath)) {
        await writeFile(filepath, data)
    } else {
        throw ('File/folder exist')
    }
}

module.exports = {
    write
}
