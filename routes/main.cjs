const express = require('express')
const router = express()

// Root page
router.get('/', function(req, res) {
    res.send(`This is the root page! Nice to see you!`)
})

// About page
router.get('/about', function(req, res) {
    res.send(`This is the about page! Nice to see you!`)
})

module.exports = router