const { fileValidator } = require('./validators')

module.exports = [
  {
    name: 'filepath',
    short: 'f',
    description: 'Output path',
    validate: fileValidator
  },
  {
    name: 'name',
    short: 'n',
    description: 'Output name\'s value',
    validate: async (value) => !!value
  }
]
