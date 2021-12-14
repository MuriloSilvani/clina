const { Router } = require('express')
const jwt = require('jsonwebtoken')

const rooms = require('./rooms')
const auth = require('./auth')
const routes = Router()

routes.use('/auth', auth)

routes.use('/rooms', (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, 'secret_key', error => {
      if (error) {
        return res.status(401).json({ message: 'malformed token' })
      } else {
        return next()
      }
    })
  } else {
    return res.status(401).json({ message: 'missing authorization token' })
  }
}, rooms)

module.exports = routes
