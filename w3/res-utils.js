const fs = require('fs')
const path = require('path')

const resolve = path.resolve
const staticPath = resolve(__dirname, 'public')

const redirectTo = (page) => {
    console.log(resolve(staticPath, page))
    try {
        let file = fs.readFileSync(resolve(staticPath, page))
        return file
    } catch (error) {
        console.log(error)
        return 'Can\'t load page'
    }
   
}

module.exports = {
    redirectTo
}
