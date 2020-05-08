import { GET_USER_EXPENSE, ADD_USER_EXPENSE, DELETE_USER_EXPENSE, UPDATE_USER_EXPENSE } from '../types'
import { api } from '../../api'

export const getUserIncome = (userId) => async (dispatch) => {
  try {
    const userExpense = await api.get(`/users/${userId}/expense`)
    dispatch({
      type: GET_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserIncome Api Call')
  }
}

export const addUserIncome = (userId) => async (dispatch) => {
  try {
    const userExpense = await api.post(`/users/${userId}/expense`)
    dispatch({
      type: ADD_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserIncome Api Call')
  }
}

export const updateUserIncome = (userId) => async (dispatch) => {
  try {
    const userExpense = await api.patch(`/users/${userId}/expense`)
    dispatch({
      type: UPDATE_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserIncome Api Call')
  }
}

export const deleteUserIncome = (userId) => async (dispatch) => {
  try {
    const userExpense = await api.delete(`/users/${userId}/expense`)
    dispatch({
      type: DELETE_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserIncome Api Call')
  }
}
