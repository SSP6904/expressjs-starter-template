// Packages and routes go here
const express = require('express')

// Variable go here
const app = express()
const port = process.env.PORT || 8000

// Server options go here
app.use(express.static('public'))
app.use(express.json())

// Serer routes go here
app.get('/', function(req, res) {
    res.send('Hello world!')
})

// Listening route goes here
app.listen(port, function() {
    console.log(`Express server is listening here: http://localhost:${port}`)
})