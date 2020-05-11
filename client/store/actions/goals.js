import { ADD_USER_GOALS, DELETE_USER_GOALS, SELECT_USER_GOALS, GET_USER_GOALS, UPDATE_USER_GOALS } from '../types'
import api from '../../api'

// GET_LOADING_PENDING, GET_LOADING_SUCCESS

// export const getUserGoalsSuccess = (userId) => async (dispatch) => {
//   try {
//     dispatch({
//       type: GET_LOADING_SUCCESS,
//       payload: userId.all // return user data
//     })
//     return true
//   } catch (err) {
//     console.log('there was an error with getUserGoalsSuccess action type')
//   }
// }

// export const getUserGoalsPending = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: GET_LOADING_PENDING
//     })
//     return true
//   } catch (err) {
//     console.log('there was an error with getUserGoalsSuccess action type')
//   }
// }

export const getUserGoals = (userId) => async (dispatch) => {
  try {
    const userGoals = await api.get(`/goals/${userId}`)
    dispatch({
      type: GET_USER_GOALS,
      payload: userGoals.data
    })
    return true
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
      payload: userGoal.data
    })
    return true
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
      payload: userGoals.data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserGoals Api Call')
  }
}
export const selectUserGoal = data => dispatch => {
  try {
    dispatch({
      type: SELECT_USER_GOALS,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserExpense Api Call')
  }
}
export const deleteUserGoals = (goalsId) => async (dispatch) => {
  try {
    const userGoals = await api.delete(`/goals/${goalsId}`)

    dispatch({
      type: DELETE_USER_GOALS,
      payload: userGoals.data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserGoals Api Call')
  }
}
