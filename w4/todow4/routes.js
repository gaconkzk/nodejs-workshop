const resUtils = require('./res-utils')
class Routes {
  constructor(dir) {
    this.dir = dir
  }
  routes() {
    return [
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
      {
        method: 'delete',
        path: '/api/delete',
        handler: (req, res) => res.end('delete method')
      }
    ]
  }
}
module.exports = Routes