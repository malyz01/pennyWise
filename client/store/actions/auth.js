import api, { setTokenHeader } from '../../api'
// import setError from './error'
import { SET_AUTH } from '../types'

export const setAuth = (user) => ({
  type: SET_AUTH,
  payload: user
})

export const setAuthorizationToken = (token) => {
  setTokenHeader(token)
}

export const authUser = (user) => async (dispatch) => {
  try {
    const response = await api.post(`/auth/login`, user)
    const { token, ...userData } = response.data
    localStorage.setItem('jwtToken', token)
    setAuthorizationToken(token)
    dispatch(setAuth(userData))
    // dispatch(setError({}))
    return userData.id
  } catch (err) {
    // dispatch(setError(err.response.data))
    throw new Error(err.response.data.message)
  }
}

export const newUser = (data) => async (dispatch) => {
  try {
    const response = await api.post(`/auth/register`, data)
    const { token, ...userData } = response.data
    localStorage.setItem('jwtToken', token)
    setAuthorizationToken(token)
    dispatch(setAuth(userData))
    return userData.id
  } catch (err) {
    console.log(err)
  }
}

export const logout = () => (dispatch) => {
  localStorage.clear()
  setAuthorizationToken(false)
  dispatch(setAuth({}))
}

export default {
  setAuth,
  setAuthorizationToken,
  authUser,
  logout
}
