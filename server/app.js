const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesGyms = require('./routes/gyms')
const routesGym = require('./routes/gym')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api/gyms', routesGyms)
app.use('/api/gym', routesGym)

// app.get('/api/gyms/:city', function (req, res) {

// })

module.exports = app
