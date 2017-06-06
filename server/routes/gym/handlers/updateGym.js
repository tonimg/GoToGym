const Gym = require(__base + 'models/Gym')

function updateGym (req, res) {
  const { id } = req.params
  const { name, description, image, price } = req.body

  const dataToUpdate = {}
  if (name) dataToUpdate.name = name
  if (description) dataToUpdate.description = description
  if (image) dataToUpdate.image = image
  if (price) dataToUpdate.price = price

  Gym.findByIdAndUpdate(id, dataToUpdate)
          .then(() => res.status(200).json({msg: ` gym w/id ${id} has been update properly`}))
          .catch(() => res.status(500).json({ msg: `error updating gym w/ id ${id}` }))
}

module.exports = updateGym
