import { ADD_USER_GOALS, DELETE_USER_GOALS, GET_USER_GOALS, UPDATE_USER_GOALS } from '../types'
import api from '../../api'

export const getUserGoals = (userId) => async (dispatch) => {
  try {
    const userGoals = await api.get(`/goals/${userId}`)
    dispatch({
      type: GET_USER_GOALS,
      payload: userGoals
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserGoals Api Call')
  }
}

export const addUserGoal = (userId, data) => async (dispatch) => {
  try {
    const userGoal = await api.post(`/goals/${userId}`, data)
    dispatch({
      type: ADD_USER_GOALS,
      payload: userGoal
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserGoals Api Call')
  }
}

export const updateUserGoal = (goalsId, data) => async (dispatch) => {
  try {
    const userGoals = await api.put(`/goals/${goalsId}`, data)
    dispatch({
      type: UPDATE_USER_GOALS,
      payload: userGoals
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserGoals Api Call')
  }
}

export const deleteUserGoals = (goalsId) => async (dispatch) => {
  try {
    const userGoals = await api.delete(`/goals/${goalsId}`)
    dispatch({
      type: DELETE_USER_GOALS,
      payload: userGoals
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserGoals Api Call')
  }
}
