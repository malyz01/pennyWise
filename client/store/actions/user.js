/* eslint-disable no-console */
import { GET_USER_PROFILE } from '../types'
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
    console.log('error in getUserProfile Api Call')
  }
}

// export const updateUserProfile = (userId, updatedData) => async (dispatch) => {
//   try {
//     const { data } = await api.put()
//   }
// }
