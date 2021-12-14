const { Router } = require('express')
const jwt = require('jsonwebtoken')
const api = require('../services/api')

const rooms = Router()

rooms.post('/', async (req, res) => {
  const user = req.body

  try {
    const login = await api.post('/login', user)
    if (
      login.status === 201
    ) {
      const token = jwt.sign({ user: login.data }, 'secret_key', { expiresIn: 1000 * 60 })
      return res.status(200).json({ token })
    }
  } catch (error) {
    console.log(error)
    return res.json({ error })
  }
  return res.status(404).json({ message: 'user not found' })
})

module.exports = rooms
