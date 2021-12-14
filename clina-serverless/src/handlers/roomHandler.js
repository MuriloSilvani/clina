const connectToDatabase = require('../services/database')
const roomController = require('../controllers/roomController')

module.exports = {
  createRoom: async (event) => {
    await connectToDatabase()
    const body = JSON.parse(event.body)    

    try {
      return {
        statusCode: 201,
        body: JSON.stringify(await roomController.create(body))
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  },
  getRooms: async () => {
    await connectToDatabase()

    try {
      return {
        statusCode: 200,
        body: JSON.stringify(await roomController.getAll())
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  },
  getRoom: async (event) => {
    await connectToDatabase()
    const params = event.pathParameters

    try {
      return {
        statusCode: 200,
        body: JSON.stringify(await roomController.getOne(params.room_id))
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  },
  modifyRoom: async (event) => {
    await connectToDatabase()
    const params = event.pathParameters
    const body = JSON.parse(event.body)   

    try {
      return {
        statusCode: 204,
        body: JSON.stringify(await roomController.modify(params.room_id, body))
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  },
  deleteRoom: async (event) => {
    await connectToDatabase()
    const params = event.pathParameters

    try {
      return {
        statusCode: 204,
        body: JSON.stringify(await roomController.delete(params.room_id))
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  }
}