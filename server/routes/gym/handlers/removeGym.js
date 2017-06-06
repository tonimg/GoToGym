const Gym = require(__base + 'models/Gym')

function removeGym (req, res) {
  const { id } = req.params
  Gym.findByIdAndRemove(id)
        .then(() => res.status(200).json({ msg: `gym w/ id ${id} removed properly ` }))
        .catch(() => res.status(500).json({ msg: `error removing  gym w/ id ${id} ` }))
}

module.exports = removeGym
