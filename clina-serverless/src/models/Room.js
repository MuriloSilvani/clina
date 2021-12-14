const mongoose = require('mongoose')
const { Schema } = mongoose

const addressSchema = new Schema({
  public_place: String,
  number: Number,
  complement: String,
  district: String,
  city: String,
  state: String,
  country: String,
  cep: String,
})

const roomSchema = new Schema({
  name: String,
  description: String,
  address: addressSchema,
  images: Array,
  price: Number
}, {
	timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Room', roomSchema)
