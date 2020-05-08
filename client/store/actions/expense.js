import {
  GET_USER_EXPENSE,
  ADD_USER_EXPENSE,
  DELETE_USER_EXPENSE,
  UPDATE_USER_EXPENSE
} from '../types'
import axios from 'axios'

export const getUserExpense = userId => async dispatch => {
  try {
    const userExpense = await axios.get(`/api/v1/expense/${userId}`)
    dispatch({
      type: GET_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserExpense Api Call')
  }
}

export const addUserExpense = (userId, data) => async dispatch => {
  try {
    const userExpense = await axios.post(`/api/v1/expense/${userId}`, data)
    dispatch({
      type: ADD_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserExpense Api Call')
  }
}

export const updateUserExpense = (expenseId, data) => async dispatch => {
  try {
    // /axios/v1/expense/:expenseId
    const userExpense = await axios.put(`/api/v1/expense/${expenseId}`, data)
    dispatch({
      type: UPDATE_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserExpense Api Call')
  }
}

export const deleteUserExpense = expenseId => async dispatch => {
  try {
    const userExpense = await axios.delete(`/api/v1/expense/${expenseId}`)
    dispatch({
      type: DELETE_USER_EXPENSE,
      payload: userExpense
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserExpense Api Call')
  }
}
