require('dotenv').config({path:__dirname+'/./../../.env'})
const server = require('./http')
const utils = require('./res-utils')
const argv = require('yargs') // eslint-disable-line
    .option('port', {
        alias: 'p',
        default: process.env.PORT,
        type: 'number',
        description: 'Server port (default: 8080)'
    })
    .option('ip', {
        alias: 'i',
        default: process.env.IP,
        type: 'string',
        description: 'Server external ip (default: 127.0.0.1)'
    })
    .option('folder', {
        alias: '-f',
        default: process.env.FOLDER,
        type: 'string',
        description: '(The default folder that server will serve static files (default: public)'
    }).help('help')
   .argv
   let port = argv.port;
   let ip = argv.ip;
   let folder = argv.folder;
    if (!utils.checkPort(port)) {
        port = process.env.PORT
        console.log(`Port ${argv.port} is invalid, server will start with ${port}`)
    }
    if (!utils.checkIp(ip)) {
        ip = process.env.IP
        console.log(`IP ${argv.ip} is invalid, server will start with ${ip}`)
    }
    if (!utils.checkFolderExist(folder)) {
        folder = process.env.FOLDER
        console.log(`Folder ${argv.folder} is not exist, server will start with ${folder}`)
    }

    server.startServer(port, ip, folder);
   
    console.log(`Server started: \n  - On port: ${port} \n  - External IP ${ip} \n  - Folder: ${folder}`);

// TODO create cli to start an http server
// cli params:
// --port (or -p) (default 8080) - server port
// --ip (or -i) (default 127.0.0.1) - server external ip
// --folder - (the default folder that server will serve static files)
// we will start a http server at port, with input ip
// and serve all static files inside the input folder (include images)
// if user not input port/ip/folder, those will be read using
// env
