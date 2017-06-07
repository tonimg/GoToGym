const mongoose = require('mongoose')
const collection = 'gyms'

const GymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  clases: String,
  latitude: Number,
  longitude: Number,
  postalCode: Number,
  address: String,
  description: String,
  image: String
}, { collection })

module.exports = mongoose.model('Gym', GymSchema)
