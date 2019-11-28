const fs = require('fs')
const path = require('path')

const resolve = path.resolve
const staticPath = resolve(__dirname, 'public')

const redirectTo = (page) => {
    let indexFile = fs.readFileSync(resolve(staticPath, page))
    return indexFile
}

module.exports = {
    redirectTo
}
