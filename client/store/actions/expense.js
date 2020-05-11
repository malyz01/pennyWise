import {
  GET_USER_EXPENSES,
  SELECT_USER_EXPENSE,
  ADD_USER_EXPENSE,
  DELETE_USER_EXPENSE,
  UPDATE_USER_EXPENSE
} from '../types'
import api from '../../api'

export const GET_LOADING_PENDING = 'GET_LOADING_PENDING'
export const GET_LOADING_SUCCESS = 'GET_LOADING_SUCCESS'

export const getUserExpenses = userId => async dispatch => {
  try {
    const { data } = await api.get(`/expense/${userId}`)
    dispatch({
      type: GET_USER_EXPENSES,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserExpense Api Call')
  }
}

export const selectUserExpense = data => dispatch => {
  try {
    dispatch({
      type: SELECT_USER_EXPENSE,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserExpense Api Call')
  }
}

export const addUserExpense = (userId, expenseData) => async dispatch => {
  try {
    const { data } = await api.post(`/expense/${userId}`, expenseData)
    dispatch({
      type: ADD_USER_EXPENSE,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserExpense Api Call')
  }
}

export const updateUserExpense = (expenseId, expenseData) => async dispatch => {
  try {
    // /api/v1/expense/:expenseId
    const { data } = await api.put(`/expense/${expenseId}`, expenseData)
    dispatch({
      type: UPDATE_USER_EXPENSE,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserExpense Api Call')
  }
}

export const deleteUserExpense = expenseId => async dispatch => {
  try {
    const { data } = await api.delete(`/expense/${expenseId}`)
    dispatch({
      type: DELETE_USER_EXPENSE,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserExpense Api Call')
  }
}
