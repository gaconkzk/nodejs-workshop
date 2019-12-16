require('dotenv').config()
const validator = require('./validator.js')
const fs = require('fs')
const path = require('path')

/**
 * Validate port, ip and folder data, return them as one object if validated
 * or else return false
 * @param {*} port    Server listening port
 * @param {*} ip      Server listening ip address
 * @param {*} folder  Static folder
 */
const validate = (port, ip, folder) => {
  const server = {}
  // initialize data based on input config
  server.port = port || process.env.PORT
  server.ip = ip || process.env.IP
  server.folder = folder || process.env.FOLDER

  return validator.validate({ port, ip, folder }) && server
}

const getRealPath = (dir) => {
  const temp = (dir || '').split('/').filter(itm => !!itm)
  if (temp[0] !== process.env.ROOT) temp.unshift(process.env.ROOT)
  return path.join(__dirname, temp.join('/'))
}
const isExistPath = (dir) => {
  return fs.existsSync(dir)
}
const getExtName = (dir) => {
  return path.extname(dir);
}
const sortRoutes = (routes) => {
  // TODO - we need to sort by name then by length
  return routes.sort((itm1, itm2) => {
    const item1 = itm1.path.split('/')
    const item2 = itm2.path.split('/')
    return item1.length === item2.length ? item1[item1.length - 1].length - item2[item2.length - 1].length : item1.length - item2.length
  })
}

module.exports = {
  validate,
  getRealPath,
  isExistPath,
  getExtName,
  sortRoutes
}
