var http = require('http');

// web application need
// - middlewares (security, body json convert ...)
// - routers
// - handler
//
const Router = require('./router.js')
const Routes = require('./routes.js')

start = async ({port, ip, folder}) => {
  let router = new Router()
  let routes = new Routes()

  // route for static path
  // will serve under baseUrl, default should be '/'
  router.staticRoute(folder, '/static')

  // sample single route
  router.get('/hello', (_, res) => res.end('hello from http'))
  router.post('/api/data', (_, res) => res.end('okie i received'))
  router.addAll(routes.routes())

  // create a server object
  // binding router to replace http server context
  http.createServer(router.handle).listen(port, ip)
}

module.exports = { start }
