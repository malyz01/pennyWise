import { ADD_USER_INCOME, DELETE_USER_INCOME, GET_USER_INCOME, UPDATE_USER_INCOME } from '../types'
import { api } from '../../api'

export const getUserIncome = (userId) => async (dispatch) => {
  try {
    const userIncome = await api.get(`/income/${userId}`)
    dispatch({
      type: GET_USER_INCOME,
      payload: userIncome
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserIncome Api Call')
  }
}

export const addUserIncome = (userId, data) => async (dispatch) => {
  try {
    const userIncome = await api.post(`/income/${userId}`, data)
    dispatch({
      type: ADD_USER_INCOME,
      payload: userIncome
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserIncome Api Call')
  }
}

export const updateUserIncome = (incomeId, data) => async (dispatch) => {
  try {
    const userIncome = await api.put(`/income/${incomeId}`, data)
    dispatch({
      type: UPDATE_USER_INCOME,
      payload: userIncome
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserIncome Api Call')
  }
}

export const deleteUserIncome = (incomeId) => async (dispatch) => {
  try {
    const userIncome = await api.delete(`/income/${incomeId}`)
    dispatch({
      type: DELETE_USER_INCOME,
      payload: userIncome
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserIncome Api Call')
  }
}
