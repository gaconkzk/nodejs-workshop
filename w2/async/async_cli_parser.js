let isValue = (item) => !item.startsWith('-')
function getValueByKey(key, arrs) {
  return arrs
    .find((item, i) => arrs[i - 1] === `-${key}` && isValue(item))
}

// TODO
// - implement for long param (--long-key=value)
// - implement for required argument (when required = true, will print usage if it missing, default required is false)
// - implement for default of argument (when have default value, will use that if params missing, should not use with required)
class CliBuilder {
  constructor() {
    this.author = 'unknown'
    this.description = 'A generated cli'
    this.version = '0.0.1'
    this.args = []
    this.rawArgs = process.argv.slice(2) || []
  }

  params(params) {
    this.args.push(...params)
    return this
  }

  description(description) {
    this.description = description
    return this
  }

  version(version) {
    this.version = version
    return this
  }

  usages() {
    let usageStr = `${this.description}
    Author: ${this.author}
    Version: ${this.version}
`

    let argsStr = this.args.map(arg => `    ${arg.short ? `-${arg.short}` : ''}    ${arg.long ? `-${arg.long}` : ''}    ${arg.description || ''}`).join('\n')

    return `${usageStr}${argsStr}`
  }

  async match() {
    let future = this.args.map(async arg => {
      // TODO how do we cover long name
      // TODO how do we cover default value
      let value = getValueByKey(arg.short, this.rawArgs)
      // TODO check required - will exit when required args is missing

      // validate arg using arg.validate
      const isAsync = arg.validate && arg.validate.constructor.name === "AsyncFunction";
      const isNotAsync = arg.validate && arg.validate.constructor.name === "Function";
      const isValid = (isAsync && (await arg.validate(value))) || (isNotAsync && arg.validate(value))
      let notValid = !(!arg.validate ||
        isValid)

      // fast return
      if (notValid) {
        console.error(`Invalid param ${arg.name} with value: ${value}\n\n${this.usages()}`)
        process.exit(1)
      }

      return {
        [arg.name]: value
      }
    })

    let data = await Promise.all(future)
    return Object.assign({}, ...data)
  }
}

module.exports = {
  CliBuilder,
  getValueByKey
}
