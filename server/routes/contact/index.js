const express = require('express')
const router = express.Router()

const contactMail = require('./handlers/contactMail')

router.post('/contact', contactMail)

module.exports = router
