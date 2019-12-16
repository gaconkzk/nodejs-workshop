const { sortRoutes, getRealPath } = require('./common-utils')
const { staticFileHandler, notFoundHandler } = require('./static-route')

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

  staticRoute(staticDir, baseUrl) {
    this.staticRoute = {
      url: baseUrl,
      method: 'get',
      handler: staticFileHandler(staticDir, baseUrl)
    }
  }

  _add(method, path, handler) {
    let matcher = match(method, path)
    const isExist = this.routes.some(matcher)
    if (!isExist) {
      const route = { method, path, handler }
      this.routes.push(route)
      this.routes = sortRoutes(this.routes)
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
    this.routes = sortRoutes(this.routes)
  }

  async handle(req, res) {
    const method = req.method.toLowerCase()
    const path = req.url
    let matcher = match(method, path)
    const route = this.routes.find(matcher)

    if (route) {
      await route.handler(req, res)
    } else if (this.staticRoute && path.startsWith(this.staticRoute.url)) {
      // TODO combine this with abote route
      await this.staticRoute.handler(req, res)
    } else {
      await notFoundHandler(req, res)
    }
  }
}

module.exports = Router
