const fs = require('fs')

// simple writer
function write(filepath, data) {
  fs.writeFileSync(filepath, data)
}

module.exports = {
  write
}
