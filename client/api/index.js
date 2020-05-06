import axios from 'axios'

const api = axios.create({
  baseURL: '/api/v1/'
})

export function setTokenHeader (token) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

export default api
