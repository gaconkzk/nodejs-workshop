require('dotenv').config({path:__dirname+'/./../../.env'})
const validator = require('./validator.js')
const fs = require('fs')
const path = require('path')

const serverInfo = (port, ip, folder) => {
    const server = {}
    server.port = validator.checkPort(port) ? port : process.env.PORT
    server.ip = validator.checkIp(ip) ? ip : process.env.IP
    server.folder = validator.checkFolderExist(folder) ? folder : process.env.FOLDER
    process.env.ROOT = server.folder
    if (!validator.checkPort(port)) {
        console.log(`Port ${argv.port} is invalid, server will start with ${port}`)
    }
    if (!validator.checkIp(ip)) {
        console.log(`IP ${argv.ip} is invalid, server will start with ${ip}`)
    }
    if (!validator.checkFolderExist(folder)) {
        console.log(`Folder ${argv.folder} is not exist, server will start with ${folder}`)
    }
    return server;
}


const getRealPath = (dir) => {
    const temp = dir.split('/').filter(itm => !!itm)
    if (temp[0] !== process.env.ROOT) temp.unshift(process.env.ROOT)
    return path.join(__dirname, temp.join('/'))
}
const isExistPath = (dir) => {
    return fs.existsSync(dir)
}
const getExtName = (dir) => {
    return path.extname(dir);
}
const orderRoutesByLength = (routes) => {
    return routes.sort((itm1, itm2) => {
      const item1 = itm1.path.split('/') 
      const item2 = itm2.path.split('/')
      return item1.length === item2.length ? item1[item1.length - 1].length - item2[item2.length - 1].length : item1.length - item2.length
    })
  }
  const loadFileByPath = (dir) => {
    try {
        if (isExistPath(dir) && fs.lstatSync(dir).isFile()) {
            let file = fs.readFileSync(dir)
            return file
        } else if (isExistPath(dir)) {
            return getFileInFolder(dir)
        }
        return 'Path incorrect'
    } catch (error) {
        console.log(error)
        return 'Can\'t load page'
    }
   
}
const getFileInFolder = (dir) => {
    let list = '<html><body>'
    fs.readdirSync(dir).map(fileName => {
        const temp = path.join(dir, fileName).split('\\')
        const temp1 = temp.slice(temp.indexOf(process.env.ROOT), temp.length)
        list += `<a href="/${temp1.join('/')}"> ${fileName}</a> <br>`;
    return path.join(dir, fileName)
  })
  list += '</body></html>'
  return list
}
  
module.exports = {
    serverInfo,
    getRealPath,
    isExistPath,
    getExtName,
    orderRoutesByLength,
    loadFileByPath
}