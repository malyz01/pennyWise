import { ADD_USER_GOALS, DELETE_USER_GOALS, GET_USER_GOALS, UPDATE_USER_GOALS } from '../types'
import { api } from '../../api'

export const getUserIncome = (userId) => async (dispatch) => {
  try {
    const userGoals = await api.get(`/users/${userId}/goals`)
    dispatch({
      type: GET_USER_GOALS,
      payload: userGoals
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserGoals Api Call')
  }
}

export const addUserIncome = (userId) => async (dispatch) => {
  try {
    const userGoals = await api.post(`/users/${userId}/goals`)
    dispatch({
      type: ADD_USER_GOALS,
      payload: userGoals
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserGoals Api Call')
  }
}

export const updateUserIncome = (userId) => async (dispatch) => {
  try {
    const userGoals = await api.put(`/users/${userId}/goals`)
    dispatch({
      type: UPDATE_USER_GOALS,
      payload: userGoals
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserGoals Api Call')
  }
}

export const deleteUserIncome = (userId) => async (dispatch) => {
  try {
    const userGoals = await api.delete(`/users/${userId}/goals`)
    dispatch({
      type: DELETE_USER_GOALS,
      payload: userGoals
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserGoals Api Call')
  }
}
