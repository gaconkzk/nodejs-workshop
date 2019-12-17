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

const regex = p => new RegExp("^" + p.replace(/:[^\s/]+/g, '([\\w-]+)') + "$")

module.exports = {
  isExistPath,
  getExtName,
  redirectTo,
  regex
}
