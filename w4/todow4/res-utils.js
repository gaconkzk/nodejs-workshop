const fs = require('fs')
const path = require('path')
const commonUtils = require('./common-utils')
const resolve = path.resolve

const redirectTo = (dir, page) => {
    const staticPath = commonUtils.getRealPath(dir)
    try {
        let file = fs.readFileSync(resolve(staticPath, page))
        return file
    } catch (error) {
        console.log(error)
        return 'Can\'t load page'
    }
   
}

module.exports = {
    redirectTo,
}
