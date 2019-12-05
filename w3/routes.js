const indexHandler = require('./indexHandler.js')
const resUtils = require('./res-utils')

module.exports = [
  {
    path: '/',
    handler: indexHandler
  },
  {
    path: '/about',
    handler: (req, res) => res.end(resUtils.redirectTo('about.html'))
  },
  {
    path: '/test',
    handler: (req, res) => res.end(resUtils.redirectTo('test-return-page.html'))
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
