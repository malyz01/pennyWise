import { GET_USER_PROFILE, GET_USER_DETAILS } from '../types'
import api from '../../api'

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/users/${userId}/profile`)
    dispatch({
      type: GET_USER_PROFILE,
      payload: data
    })
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
