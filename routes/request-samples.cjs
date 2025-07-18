const express = require('express')
const router = express()

// GET request route
router.get('/get', function(req, res) {
    res.send(`This is a GET request! Nice to see you!`)
})

// POST request route
router.post('/post', function(req, res) {
    res.send(`This is a POST request! Nice to see you!`)
})

module.exports = router