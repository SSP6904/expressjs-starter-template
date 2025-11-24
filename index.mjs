// Packages go here
import express from 'express'

(async function() {
    // Variables go here
    const app = express()
    app.config = {
        port: process.env.PORT || 8000
    }

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
    app.listen(app.config.port, function() {
        console.log(`Started the express server!`)
        console.log(`Forwarded URL: http://localhost:${app.config.port}`)
    })
})()