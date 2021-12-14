const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: String,
  password: String,
  avatar: String
}, {
	timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('User', userSchema)
