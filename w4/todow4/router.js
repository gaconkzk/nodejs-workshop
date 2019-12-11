const GET = 'get'
const POST = 'post'
const DELETE = 'delete'
const PUSH = 'push'
const OPTION = 'option'
const fs = require('fs')
const path = require('path')
const resolve = path.resolve

const methods = [GET, POST, DELETE, PUSH, OPTION]

// TODO use regex to match path instead of equally checking
function match(method, path) {
  return (itm) => itm.method === method && itm.path === path
}

class Router {
  constructor() {
    this.routes = []
    // make alias functions
    methods.forEach(m => {
      this[m] = (path, handler) => {
        this._add(m, path, handler)
      }
    })

    // we need binding to keep the router context in other places
    this.handle = this.handle.bind(this)
  }

  _add(method, path, handler) {
    let matcher = match(method, path)
    const isExist = this.routes.some(matcher)
    if (!isExist) {
      const route = { method, path, handler }
      this.routes.push(route)
    } else {
      throw new Error(`${method}: ${path} already existed`)
    }
  }

  addAll(routes) {
    let routeArr = routes.map(r => Object.assign({ method: 'get' }, r))
    // check existed and throw error
    let existed = this.routes.find(r => !!routeArr.find(it => it.method === r.method && it.path === r.path))
    if (existed) throw new Error(`${existed.method}: ${existed.path} already existed`)
    this.routes.push(...routeArr)
  }

  async handle(req, res) {
    const method = req.method.toLowerCase()
    const path = req.url
    let matcher = match(method, path)
    const route = this.routes.find(matcher)
    try{
      let stat=''
      const staticPath = resolve(`${__dirname}${req.url}`)
      if(fs.existsSync(staticPath)){
      stat = fs.lstatSync(staticPath)
      }
      if (route) {
        await route.handler(req, res)
      } 
      else if (stat.isDirectory()) {
        let files = fs.readdirSync(staticPath)
        let rs = "<html>"
        for (var i in files) {
          rs += `<a href="${path}/${files[i]}"> ${files[i]} </a> <br>`
        }
        rs += "</html>"
        res.end(rs)
      } else if (stat.isFile()) {
          let file = fs.readFileSync(staticPath)
          res.end(file)
      }
      else {
        res.statusCode = 404
        res.statusMessage = 'Not found'
      }
    }
    catch (error) {
      console.log(error)
      return res.end('Can\'t load path')
      
    }
  }
}

module.exports = Router