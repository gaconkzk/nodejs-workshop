const path = require('path')
const fs = require('fs')
const map = require('./file-ext-map')
const { getExtName, isExistPath } = require('./common-utils')

const notFoundHandler = (_, res) => {
  res.statusCode = 404
  res.statusMessage = 'Not found'
  res.end('Page not found')
}

const loadFileByPath = (dir) => {
  try {
    if (isExistPath(dir) && fs.lstatSync(dir).isFile()) {
      let file = fs.readFileSync(dir)
      return file
    }

    return null
  } catch (error) {
    console.log(error)
    return 'Can\'t load page'
  }
}
const loadFolderByPath = (dir) => {
  return fs.readdirSync(dir)
}


const staticFileHandler = (folder, baseUrl) => {
  return (req, res) => {
    // remove the baseUrl part
    let rpath = req.url.slice(req.url.indexOf(baseUrl)+baseUrl.length)
    let realPath = path.join(__dirname, folder, rpath)

    if (isExistPath(realPath)) {
      let temp = loadFileByPath(realPath)
      if (!temp) {
        temp = loadFolderByPath(realPath).map(f => `<a href="${baseUrl}${rpath}/${f}">${f}</a>`).join('<br/>')
      }

      const extType = getExtName(realPath)
      res.setHeader("Content-Type", map[extType] || 'text/html');
      res.end(temp)
    } else {

    }

  }
}

module.exports = {
  staticFileHandler,
  notFoundHandler
}
