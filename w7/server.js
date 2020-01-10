const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')

staticMiddleware = express.static(path.resolve(__dirname, 'frontend', 'dist'))

app.use(staticMiddleware)

app.use(history())

app.use(staticMiddleware)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
