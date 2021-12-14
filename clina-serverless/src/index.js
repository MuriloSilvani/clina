const roomHandler = require('./handlers/roomHandler')
const userHandler = require('./handlers/userHandler')

const handlers = {
  ...roomHandler,
  ...userHandler
}

module.exports = handlers
