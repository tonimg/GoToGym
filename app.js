const express = require('express')
const path = require('path')

require('dotenv').load()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '/public')))

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
