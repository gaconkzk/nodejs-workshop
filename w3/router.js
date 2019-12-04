class Router {
    constructor(req, res) {
        this.req = req
        this.res = res
        this.routes = []
    }
    add(method, path, handler) {
        const isExist = this.routes.find((itm) => itm.method === method && itm.path === path)
        if (!isExist) {    
            const route = {
                method: method,
                path: path,
                handler: handler
            }
            this.routes.push(route)
        }
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
    resolve(method,url, handler ){
        if (this.req.url === url && this.req.method.toLowerCase() === method) {
            handler(this.req, this.res)
        } else {
            this.res.end(`${method} not found `)
        }
    }
    get(url, handler) {
        this.resolve('get',url,handler)
    }
    post(url, handler) {
        this.resolve('post',url,handler)
    }
    delete(url, handler) {
        this.resolve('delete',url,handler)
    }

    // TODO implement post, delete methods without duplicated code
}

module.exports = Router