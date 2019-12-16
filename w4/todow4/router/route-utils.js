const fs = require('fs')
const path = require('path')
const resolve = path.resolve

const isExistPath = (dir) => {
  return fs.existsSync(dir)
}
const getExtName = (dir) => {
  return path.extname(dir);
}

const redirectTo = (dir, page) => {
  const staticPath = path.resolve(dir)
  try {
    let file = fs.readFileSync(resolve(staticPath, page))
    return file
  } catch (error) {
    console.log(error)
    return 'Can\'t load page'
  }

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
  isExistPath,
  getExtName,
  sortRoutes,
  redirectTo,
}
