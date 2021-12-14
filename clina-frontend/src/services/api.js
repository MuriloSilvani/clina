import axios from 'axios'
import router from '@/router'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(req => {
  const token = localStorage.getItem('token')
  if (token) {
    req.headers.authorization = token
  }
  return req
})

api.interceptors.response.use(res => {
  return res
}, error => {
  const status = error.response.status
  if (status === 401) {
    alert('Usuário não autenticado')
    localStorage.removeItem('token')
    router.push('/')
  }
})

export default api
