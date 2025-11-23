// Packages go here
import express from 'express'

// Variables go here
const app = express()
const port = process.env.PORT || 8000

// Server options go here
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Serer routes and handlers go here
app.get('/', function(req, res) {
    res.send(`This is the root page! Nice to see you!`)
})
app.get('/about', function(req, res) {
    res.send(`This is the about page! Nice to see you!`)
})
app.use(function(req, res) {
    return res.status(404).json({status: 404, message: "That page isn't on this server!"})
})

// Listening route goes here
app.listen(port, function() {
    try {
        console.log(`Started the express server! Click on the link below to see it in your browser!`)
        console.log(`http://localhost:${port}`)
    } catch(error) {
        const message = error instanceof Error ? error.message : 'An unknown error has occurred!'
        console.error(message)
    }
})