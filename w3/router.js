class Router {
    constructor(req, res) {
        this.req = req
        this.res = res
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