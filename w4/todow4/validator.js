const fs = require('fs')
const path = require('path')
const resolve = path.resolve

const checkIp = (ip) => {
  const ipv4Regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  return ipv4Regex.test(ip)
}

const checkFolderExist = (dir) => {
  return fs.existsSync(dir)
}

const checkPort = (port) => {
  return /^\d+$/.test(port);
}

function invalidate(data) {
  const server = {}
  // initialize data based on input config
  server.port = data.port || process.env.PORT
  server.ip = data.ip || process.env.IP
  server.folder = data.folder || process.env.FOLDER

  return checkPort(server.port) &&
         checkIp(server.ip) &&
         checkFolderExist(server.folder) && server
}

module.exports = {
  checkIp,
  checkFolderExist,
  checkPort,
  invalidate
}
