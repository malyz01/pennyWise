import { GET_USER_PROFILE, GET_USER_DETAILS } from '../types'
import api from '../../api'
import { loading } from './loading'

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/users/${userId}/profile`)
    dispatch({
      type: GET_USER_PROFILE,
      payload: data
    })
    dispatch(loading('user', false))
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserProfile Api Call')
  }
}

export const getUserDetails = (userId) => async dispatch => {
  try {
    const { data } = await api.get(`/users/${userId}/details`)
    dispatch({
      type: GET_USER_DETAILS,
      payload: data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserDetails Api Call')
  }
}
