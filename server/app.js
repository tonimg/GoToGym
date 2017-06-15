const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

const passport = require('./config/passport')

const authRoutes = require('./routes/auth')
const privateRoutes = require('./routes/private')

const routesContact = require('./routes/contact')

const routesGyms = require('./routes/gyms')
const routesGym = require('./routes/gym')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use(express.static(path.join(__dirname, '../public')))

app.use(routesContact)

// app.use(authRoutes)
// app.use(privateRoutes)

app.use('/api/gyms', routesGyms)
app.use('/api/gym', routesGym)
app.use(passport.initialize())

module.exports = app
