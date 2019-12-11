const GET = 'get'
const POST = 'post'
const DELETE = 'delete'
const PUSH = 'push'
const OPTION = 'option'

const fs = require("fs"); 
const pathRoot = require('path');

const methods = [GET, POST, DELETE, PUSH, OPTION]
const folderUtils = require('./folder-util')
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
    console.log(path.slice(1));
    const route = this.routes.find(matcher)
    if (route) {
      await route.handler(req, res)
    } else {
      const a = await folderUtils.checkFile(path.slice(1));
      if (a === false) {
        // const directoryPath = pathRoot.join(__dirname, path.slice(1));
        const files = fs.readdirSync(path.slice(1));
        res.statusCode = 200;
        res.end(files.join(', '));
      } else if (a === true) {
        const file = fs.readFileSync(path.slice(1));
        res.statusCode = 200;
        res.end(file);
      } else {
        res.statusCode = 404;
        res.end('page not found');
      }
    }
  }
}

module.exports = Router