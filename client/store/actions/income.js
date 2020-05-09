import { ADD_USER_INCOME, DELETE_USER_INCOME, GET_USER_INCOME, UPDATE_USER_INCOME, SELECT_USER_INCOME } from '../types'
import api from '../../api'

export const getUserIncome = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/income/${userId}`)
    dispatch({
      type: GET_USER_INCOME,
      payload: data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserIncome Api Call')
  }
}

export const selectUserIncome = (data) => (dispatch) => {
  try {
    dispatch({
      type: SELECT_USER_INCOME,
      payload: data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserExpense Api Call')
  }
}

export const addUserIncome = (userId, userData) => async (dispatch) => {
  try {
    const { data } = await api.post(`/income/${userId}`, userData)
    dispatch({
      type: ADD_USER_INCOME,
      payload: data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserIncome Api Call')
  }
}

export const updateUserIncome = (incomeId, userData) => async (dispatch) => {
  try {
    const { data } = await api.put(`/income/${incomeId}`, userData)
    dispatch({
      type: UPDATE_USER_INCOME,
      payload: data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserIncome Api Call')
  }
}

export const deleteUserIncome = (incomeId) => async (dispatch) => {
  try {
    const { data } = await api.delete(`/income/${incomeId}`)
    dispatch({
      type: DELETE_USER_INCOME,
      payload: data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserIncome Api Call')
  }
}
