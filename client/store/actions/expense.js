import { GET_USER_EXPENSE, ADD_USER_EXPENSE, DELETE_USER_EXPENSE, UPDATE_USER_EXPENSE } from '../types'
import { api } from '../../api'

export const getUserExpense = (userId) => async (dispatch) => {
  try {
    const userExpense = await api.get(`/expense/${userId}`)
    dispatch({
      type: GET_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserExpense Api Call')
  }
}

export const addUserExpense = (userId, data) => async (dispatch) => {
  try {
    const userExpense = await api.post(`/expense/${userId}`, data)
    dispatch({
      type: ADD_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserExpense Api Call')
  }
}

export const updateUserExpense = (userId, data) => async (dispatch) => {
  try {
    // /api/v1/expense/:userId
    const userExpense = await api.put(`/expense/${userId}`, data)
    dispatch({
      type: UPDATE_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserExpense Api Call')
  }
}

export const deleteUserExpense = (userId) => async (dispatch) => {
  try {
    const userExpense = await api.delete(`/expense/${userId}`)
    dispatch({
      type: DELETE_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserExpense Api Call')
  }
}
