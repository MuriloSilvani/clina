const User = require('../models/User')

const handler = {}

handler.login = async (user) => {
  return await User.findOne({
    email: user.email,
    password: user.password,
  })
}

handler.create = async (user) => {
  return await User(user).save()
}

handler.create = async (user) => {
  return await User(user).save()
}

handler.getAll = async () => {
  return await User.find()
}

handler.getOne = async (userId) => {
  return await User.findOne({ _id: userId })
}

handler.modify = async (userId, user) => {
  return await User.findOneAndUpdate(
    { _id: userId },
    { $set: user }
  )
}

handler.delete = async (userId) => {
  return await User.findOneAndDelete({ _id: userId })
}

module.exports = handler
