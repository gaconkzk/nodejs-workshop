require('dotenv').config()

const httpserver = require('./http')
const argvItems = require('./cli/argv-items')
const { invalidate } = require('./validator')

let yargs = require('yargs')
Object.keys(argvItems).forEach(it => {
  yargs = yargs.option(it, argvItems[it])
})

let cmdInput = yargs.argv
// validate/correct server information and join them into config object
let config = invalidate(cmdInput)

if (!config) {
  throw new Error(`Error validating server parameters, please check your configuration`)
}

httpserver.start(config)
