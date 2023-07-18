const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST || 'localhost'

// config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({ extended: true })) //for form data

// config template engine
configViewEngine(app)

// config static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', webRoutes)


app.listen(port,hostname, () => {
    console.log(`Example app listening on port ${port}`)
})