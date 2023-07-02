const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST || 'localhost'

// config template engine
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// config static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', webRoutes)

app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})