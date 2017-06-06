const Gym = require(__base + 'models/Gym')

function getAll (req, res) {
  Gym.find()
          .then(gyms => res.json(gyms))
}

module.exports = getAll
