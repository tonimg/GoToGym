const Gym = require(__base + 'models/Gym')

function addGym (req, res) {
  const { name, description, image, price } = req.body
  const gym = new Gym({ name, description, image, price })
  gym.save()
      .then(() => res.status(200).json({msg: `gym ${gym.name} inserted properly`}))
      .catch(() => res.status(500).json({msg: `error inserting gym ${gym.name} `}))
}

module.exports = addGym
