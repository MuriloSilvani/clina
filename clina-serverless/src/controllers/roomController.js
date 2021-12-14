const Room = require('../models/Room')

const handler = {}

handler.create = async (room) => {
  return await Room(room).save()
}

handler.getAll = async () => {
  return await Room.find()
}

handler.getOne = async (roomId) => {
  return await Room.findOne({ _id: roomId })
}

handler.modify = async (roomId, room) => {
  return await Room.findOneAndUpdate(
    { _id: roomId },
    { $set: room }
  )
}

handler.delete = async (roomId) => {
  return await Room.findOneAndDelete({ _id: roomId })
}

module.exports = handler
