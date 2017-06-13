const Gym = require(__base + 'models/Gym')

function getByCity (req, res) {
  const city = req.params.city
  const queryContainsLocation = { 'street': { '$regex': city, '$options': 'i' } }

  Gym.find(queryContainsLocation)
    .then(gyms => {
  res.json(gyms)
})
}

module.exports = getByCity
