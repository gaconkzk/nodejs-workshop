require('dotenv').config()
console.log(
    process.env.MY_NAME || 'no environment is defined'
)
