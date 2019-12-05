const fs = require('fs')
const path = require('path')

const resolve = path.resolve
const staticPath = resolve(__dirname, 'public')

const h = (req, res) => {
    let indexFile = fs.readFileSync(resolve(staticPath, 'index.html'))
    res.end(indexFile)
}

module.exports = h
