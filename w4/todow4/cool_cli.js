require('dotenv').config()
const server = require('./http')
const argvItems = require('./argv-items')
const commonUtils = require('./common-utils')

const argv = require('yargs') // eslint-disable-line
    .option(argvItems.port.key, argvItems.port)
    .option(argvItems.ip.key, argvItems.ip)
    .option(argvItems.folder.key, argvItems.folder).help('help')
    .argv
   console.log(argv.port, argv.ip, argv.folder)
    let svrInfo = commonUtils.serverInfo(argv.port, argv.ip, argv.folder); 


    server.startServer(svrInfo.port, svrInfo.ip, svrInfo.folder);
   
    console.log(`Server started: \n  - On port: ${svrInfo.port} \n  - External IP ${svrInfo.ip} \n  - Folder: ${svrInfo.folder}`);


// TODO create cli to start an http server
// cli params:
// --port (or -p) (default 8080) - server port
// --ip (or -i) (default 127.0.0.1) - server external ip
// --folder - (the default folder that server will serve static files)
// we will start a http server at port, with input ip
// and serve all static files inside the input folder (include images)
// if user not input port/ip/folder, those will be read using
// env
