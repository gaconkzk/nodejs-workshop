const commonUtils = require('./common-utils')
const map = require('./file-ext-map')
const GET = 'get'
const POST = 'post'
const DELETE = 'delete'
const PUSH = 'push'
const OPTION = 'option'

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
      this.routes = commonUtils.orderRoutesByLength(this.routes)
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
    this.routes = commonUtils.orderRoutesByLength(this.routes)
  }

  async handle(req, res) {
    const method = req.method.toLowerCase()
    const path = req.url
    const realPath = commonUtils.getRealPath(path)
    let matcher = match(method, path)
    const route = this.routes.find(matcher)
    if (route) {
      await route.handler(req, res)
    } else if (commonUtils.isExistPath(realPath)) {
      const temp = commonUtils.loadFileByPath(realPath)
      const extType = commonUtils.getExtName(realPath)
      res.setHeader("Content-Type", map[extType] || 'text/html');
      res.end(temp)
    } else {
      res.statusCode = 404
      res.statusMessage = 'Not found'
      res.end('Page not found')
    }
  }
}

module.exports = Router