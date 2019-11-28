class Router {
    constructor(req, res) {
        this.req = req
        this.res = res
        this.routes = []
    }
    add(method, path, handler) {
        const route = {
            method: method,
            path: path,
            handler: handler
        }
        this.routes.push(route)
    }
    handleRequest () {
        // this.res.setHeader('Content-Type', 'text/html');
        const method = this.req.method.toLowerCase()
        const path = this.req.url
       
        const route = this.routes.find((itm) => itm.method === method && itm.path === path)
       
        if (route) {
            route.handler(this.req, this.res)
        } else {
            this.res.end('Page not found')
        }
    }
}

module.exports = Router