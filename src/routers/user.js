const express = require('express')
const User = require('../models/user')

let router = express.Router()

router.get('/', async (req, res) => {
    res.send({message: 'All right'})
})

module.exports = router