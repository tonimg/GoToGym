const mongoose = require('mongoose')
const collection = 'gyms'

const GymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  latitude: Number,
  longitude: Number,
  postalCode: Number,
  street: String,
  image: String
}, { collection })

module.exports = mongoose.model('Gym', GymSchema)
