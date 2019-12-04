var http = require('http');

// web application need
// - middlewares (security, body json convert ...)
// - routers
// - handler
//
const Router = require('./router.js')

let router = new Router()
let routes = require('./routes.js')

// sample single route
router.get('/hello', (_, res) => res.end('hello from http'))
router.post('/api/data', (_, res) => res.end('okie i received'))

router.addAll(routes)

// create a server object
// binding router to replace http server context
http.createServer(router.handle.bind(router)).listen(9999)
