const { sortRoutes, regex } = require('./route-utils')
const { staticFileHandler, notFoundHandler } = require('./static-route')

const GET = 'get'
const POST = 'post'
const DELETE = 'delete'
const PUSH = 'push'
const OPTION = 'option'

const methods = [GET, POST, DELETE, PUSH, OPTION]

function match(method, path) {
  return (route) => route.method === method && !!path.match(route.path)
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
      path: new RegExp(`^${baseUrl.replace(/:[^\s/]+/g, '([\\w-]+)')}(\/?$|\/.*)`),
      method: 'get',
      handler: staticFileHandler(staticDir, baseUrl)
    }
  }

  _add(method, path, handler) {
    let matcher = match(method, path)
    const isExist = this.routes.some(matcher)
    if (!isExist) {
      const route = { method, path: regex(path), handler }
      this.routes.push(route)
    } else {
      throw new Error(`${method}: ${path} already existed`)
    }
  }

  addAll(routes) {
    let routeArr = routes.map(r => Object.assign({ method: 'get' }, r, { path: regex(r.path) }))
    // check existed and throw error
    let existed = this.routes.find(r => !!routeArr.find(it => it.method === r.method && it.path === r.path))
    if (existed) throw new Error(`${existed.method}: ${existed.path} already existed`)
    this.routes.push(...routeArr)
  }

  async handle(req, res) {
    const method = req.method.toLowerCase()
    const path = req.url
    let matcher = match(method, path)

    let allRoutes = [...this.routes, this.staticRoute]
    const route = allRoutes.find(matcher) || { handler: notFoundHandler }

    await route.handler(req, res)
  }
}

module.exports = Router
