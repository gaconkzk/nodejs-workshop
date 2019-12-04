const fs = require('fs')

// simple writer
function write(filepath, data) {
    // TODO validate filepath, is it file, is it dir
    // throw error if not a valid file path
    let dirTemp = filepath.split('\\')
    let dir = dirTemp.slice(0, dirTemp.length-1).join('\\');
    let file = dirTemp[dirTemp.length-1]
    if (dir.length > 1) {
      if (fs.existsSync(dir) && fs.statSync(dir).isDirectory() && !fs.existsSync(filepath)) {
      fs.writeFileSync(filepath, data)
      } else {
        console.log('Invalid Filepath')
      }
    } else if (!fs.existsSync(filepath)) {
      fs.writeFileSync(filepath, data)
    } else {
      console.log('File/folder exist')
    }
}
module.exports = {
    write
}
