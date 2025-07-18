// Packages go here
const express = require('express')

// Route imports go here
const {requestRoutes, mainRoutes} = require('./routes/index.cjs')

// Variable go here
const app = express()
const port = process.env.PORT || 8000

// Server options go here
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Serer routes go here
app.use(mainRoutes)
app.use('/request', requestRoutes)

// 404 error handler goes here
app.use(function(req, res) {
    return res.status(404).json({"status": 404, "message": "That page isn't on this server!"})
})

// Listening route goes here
app.listen(port, function() {
    try {
        console.log(`Started the express server! Click on the link below to see it in your browser!`)
        console.log(`http://localhost:${port}`)
    } catch(error) {
        console.log(error)
        console.log(`An unknown error has occurred! Check the console log to see what's wrong!`)
    }
})