require('dotenv').config({path:__dirname+'/./../.env'})
console.log(
    process.env.MY_NAME || 'no environment is defined'
)
