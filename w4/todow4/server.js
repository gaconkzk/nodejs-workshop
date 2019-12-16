require('dotenv').config()

const httpserver = require('./http')
const argvItems = require('./argv-items')
const { validate } = require('./common-utils')

let yargs = require('yargs')
Object.keys(argvItems).forEach(it => {
  yargs = yargs.option(it, argvItems[it])
})

let input = yargs.argv
// validate/correct server information and join them into config object
let config = validate(input.port, input.ip, input.folder)

try {
  httpserver.start(config)
  console.log(`Server started: \n  - On port: ${config.port} \n  - External IP ${config.ip} \n  - Folder: ${config.folder}`)
} catch (ex) {
  console.error(ex)
}
