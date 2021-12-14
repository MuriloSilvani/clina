const connectToDatabase = require('../services/database')
const userController = require('../controllers/userController')

module.exports = {
  loginUser: async (event) => {
    await connectToDatabase()
    const body = JSON.parse(event.body)    

    try {
      const user = await userController.login(body)
      if (user) {
        return {
          statusCode: 201,
          body: JSON.stringify(user)
        }
      } else {
        return {
          statusCode: 404,
          body: JSON.stringify({
            message: 'user_not_found'
          })
        }
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  },
  createUser: async (event) => {
    await connectToDatabase()
    const body = JSON.parse(event.body)

    try {
      return {
        statusCode: 201,
        body: JSON.stringify(await userController.create(body))
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  },
  getUsers: async () => {
    await connectToDatabase()

    try {
      return {
        statusCode: 200,
        body: JSON.stringify(await userController.getAll())
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  },
  getUser: async (event) => {
    await connectToDatabase()
    const params = event.pathParameters

    try {
      return {
        statusCode: 200,
        body: JSON.stringify(await userController.getOne(params.user_id))
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  },
  modifyUser: async (event) => {
    await connectToDatabase()
    const params = event.pathParameters
    const body = JSON.parse(event.body)   

    try {
      return {
        statusCode: 204,
        body: JSON.stringify(await userController.modify(params.user_id, body))
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  },
  deleteUser: async (event) => {
    await connectToDatabase()
    const params = event.pathParameters

    try {
      return {
        statusCode: 204,
        body: JSON.stringify(await userController.delete(params.user_id))
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500
      }
    }
  }
}