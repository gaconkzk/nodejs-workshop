const path = require('path')
const fs = require('fs')
const map = require('./file-ext-map')
const { getExtName, isExistPath } = require('./route-utils')

const notFoundHandler = (_, res) => {
  res.statusCode = 404
  res.statusMessage = 'Not found'
  res.end('Page not found')
}

const loadFileByPath = (dir) => {
  if (isExistPath(dir) && fs.lstatSync(dir).isFile()) {
    let file = fs.readFileSync(dir)
    return file
  }

  return null
}

const loadFolderByPath = (dir) => {
  return fs.readdirSync(dir)
}

const extractPath = (folder, baseUrl, requestUrl) => {
  // we need to get the remain part of path after baseUrl
  // ex: request /static/about.html, baseUrl /static => /about.html
  let webpath = requestUrl.replace(baseUrl, '')
  if (webpath.endsWith('/')) {
    webpath = webpath.slice(0, -1)
  }
  let realpath = path.join(folder, webpath)

  return { webpath, realpath }
}

const staticFileHandler = (folder, baseUrl) => {
  return (req, res) => {
    let { realpath, webpath } = extractPath(folder, baseUrl, req.url)
    if (isExistPath(realpath)) {
      let temp = loadFileByPath(realpath)
      if (!temp) {
        temp = loadFolderByPath(realpath).map(f => `<a href="${baseUrl}${webpath}/${f}">${f}</a>`).join('<br/>')
      }

      const extType = getExtName(realpath)
      res.setHeader("Content-Type", map[extType] || 'text/html');
      res.end(temp)
    } else {
      return notFoundHandler(req, res)
    }
  }
}

module.exports = {
  staticFileHandler,
  notFoundHandler
}
