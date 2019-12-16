require('dotenv').config()

module.exports = {
  port: {
    alias: 'p',
    default: process.env.PORT,
    type: 'number',
    description: 'Server port (default: 8080)'
  },
  ip: {
    alias: 'i',
    default: process.env.IP,
    type: 'string',
    description: 'Server external ip (default: 127.0.0.1)'
  },
  folder: {
    alias: 'f',
    default: process.env.FOLDER,
    type: 'string',
    description: '(The default folder that server will serve static files (default: public)'
  }
}
