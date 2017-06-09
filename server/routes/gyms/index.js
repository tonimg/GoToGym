const express = require('express')
const router = express.Router()

const addGym = require('./handlers/addGym')
const getAll = require('./handlers/getAll')
const getByCity = require('./handlers/getByCity')

router.post('/', addGym)
router.get('/', getAll)
router.get('/city/:city', getByCity)

module.exports = router
