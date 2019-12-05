const fs = require('fs')
const path = require('path')

const resolve = path.resolve


const redirectTo = (dir, page) => {
    const staticPath = resolve(__dirname, dir)
    try {
        let file = fs.readFileSync(resolve(staticPath, page))
        return file
    } catch (error) {
        console.log(error)
        return 'Can\'t load page'
    }
   
}
const checkIp = (ip) => {
    const ipv4Regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    return ipv4Regex.test(ip)
}
const checkFolderExist = (dir) => {
    const staticPath = resolve(__dirname, dir)
   return fs.existsSync(staticPath)
}
const checkPort = (port) => {
   return /^\d+$/.test(port); 
}
module.exports = {
    redirectTo,
    checkFolderExist,
    checkIp,
    checkPort
}
