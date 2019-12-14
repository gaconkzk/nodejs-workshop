const fs = require('fs')
const path = require('path')
const resolve = path.resolve

const checkIp = (ip) => {
    const ipv4Regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    return ipv4Regex.test(ip)
}
const checkFolderExist = (dir) => {
    const staticPath = resolve(__dirname, dir)
    console.log(staticPath)
   return fs.existsSync(staticPath)
}
const checkPort = (port) => {
   return /^\d+$/.test(port); 
}
module.exports = {
    checkIp,
    checkFolderExist,
    checkPort
}