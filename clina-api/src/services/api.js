const axios = require('axios')

const api = axios.create({
  baseURL: 'https://kc5efbrygc.execute-api.us-east-1.amazonaws.com/dev/',
  headers: {
    'Content-Type': 'application/json'
  }
})

module.exports = api
