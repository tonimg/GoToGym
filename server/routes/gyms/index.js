const express = require('express')
const router = express.Router()

const addGym = require('./handlers/addGym')
const getAll = require('./handlers/getAll')

router.post('/', addGym)
router.get('/', getAll)

module.exports = router
