const express = require('express')
const router = express.Router()

const updateGym = require('./handlers/updateGym')
const removeGym = require('./handlers/removeGym')

router.put('/:id', updateGym)
router.delete('/:id', removeGym)

module.exports = router
