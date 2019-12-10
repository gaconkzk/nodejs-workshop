require('dotenv').config({path:__dirname+'/./../../.env'})

module.exports = {
    port: {
        key: 'port',
        alias: 'p',
        default: process.env.PORT,
        type: 'number',
        description: 'Server port (default: 8080)'
    },
    ip: {
        key: 'ip',
        alias: 'i',
        default: process.env.IP,
        type: 'string',
        description: 'Server external ip (default: 127.0.0.1)'
    },
    folder: {
        key: 'folder',
        alias: 'f',
        default: process.env.FOLDER,
        type: 'string',
        description: '(The default folder that server will serve static files (default: public)'
    }
}