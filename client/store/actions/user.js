import { GET_USER_PROFILE } from '../types'
import api from '../../api'

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    const userDetails = await api.get(`/users/${userId}/profile`)
    dispatch({
      type: GET_USER_PROFILE,
      payload: userDetails.data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserProfile Api Call')
  }
}
