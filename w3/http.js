var http = require('http');

// web application need
// - middlewares (security, body json convert ...)
// - routers
// - handler
//

const Router = require('./router.js')
const indexHandler = require('./indexHandler.js')
const resUtils = require('./res-utils')
const GET = 'get'
const POST = 'post'
const DELETE = 'delete'
const PUSH = 'push'
const OPTION = 'option'

//create a server object:
http.createServer(function (req, res) {
    let router = new Router(req, res)
    
    router.add(GET, '/', indexHandler)
    router.add(GET, '/about', (req, res) => res.end(resUtils.redirectTo('about.html')))
    router.add(GET, '/test', (req, res) => res.end(resUtils.redirectTo('test-return-page.html')))
    router.add(POST, '/api/data', (req, res) => res.end('post method'))
    router.add(DELETE, '/api/delete', (req, res) => res.end('delete method'))
    router.handleRequest()

}).listen(9999); //the server object listens on port 8080
