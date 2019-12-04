var http = require('http');

// web application need
// - middlewares (security, body json convert ...)
// - routers
// - handler
//

const Router = require('router.js')
const indexHandler = require('./indexHandler.js')

//create a server object:
http.createServer(function (req, res) {
    let router = new Router(req, res)
    
    router.get('/', indexHandler)
    router.post('/api/data', (req, res) => res.send('abc'))
    router.delete('/api/delete', (req, res) => res.send('delete'))

    // if (req.url === '/api') {
    //     res.end('api 1')
    // } else {
    //     res.end('not found')
    // }
}).listen(8080); //the server object listens on port 8080
