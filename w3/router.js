class Router {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    get(url, handler) {
        if (this.req.url === url && this.req.method.toLowerCase() === 'get') {
            handler(this.req, this.res)
        } else {
            this.res.end('not found')
        }
    }

    // TODO implement post, delete methods without duplicated code
}

module.exports = Router