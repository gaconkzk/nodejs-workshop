const path = require('path')
const resUtils = require('./route-utils')
class Routes {
  constructor() {
    this.dir = path.resolve(process.cwd(), 'w4/todow4/public')
  }
  routes() {
    return [
      {
        method: 'delete',
        path: '/api/delete',
        handler: (req, res) => res.end('delete method')
      },
      {
        path: '/',
        handler: (req, res) => res.end(resUtils.redirectTo(this.dir, 'index.html'))
      },
      {
        path: '/about',
        handler: (req, res) => res.end(resUtils.redirectTo(this.dir, 'about.html'))
      },
      {
        path: '/test',
        handler: (req, res) => res.end(resUtils.redirectTo(this.dir, 'test-return-page.html'))
      },
      {
        path: '/anh',
        handler: (req, res) => res.end(resUtils.redirectTo(this.dir, 'test/anh.html'))
      },
      {
        method: 'post',
        path: '/api/post',
        handler: (req, res) => res.end('post method')
      },
    ]
  }
}
module.exports = Routes
