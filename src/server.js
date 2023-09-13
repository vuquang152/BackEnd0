const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const connection = require('./config/database')
const fileUpload = require('express-fileupload')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST || 'localhost'


// config file upload
app.use(fileUpload());

// config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })) ;//for form data

// config template engine
configViewEngine(app);

// config static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', webRoutes)
app.use('/v1/api/', apiRoutes)


// test connection 
;( async () => {
    try {
        await connection();
        app.listen(port,hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (err) {
        console.log(`Error connecting: `,err)
    }
})()


