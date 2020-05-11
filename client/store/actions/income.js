import {
  ADD_USER_INCOME,
  DELETE_USER_INCOME,
  GET_USER_INCOME,
  UPDATE_USER_INCOME,
  SELECT_USER_INCOME,
  GET_LOADING_PENDING,
  GET_LOADING_SUCCESS

} from '../types'
import api from '../../api'

export const getUserIncomeSuccess = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_LOADING_SUCCESS,
      payload: userId.all // return user data
    })
  } catch (err) {
    console.log('there was an error with getUserGoalsSuccess action type')
  }
}

export const getUserIncomePending = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_LOADING_PENDING
    })
  } catch (err) {
    console.log('there was an error with getUserGoalsSuccess action type')
  }
}

export const getUserIncome = userId => async dispatch => {
  try {
    const { data } = await api.get(`/income/${userId}`)
    dispatch({
      type: GET_USER_INCOME,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserIncome Api Call')
  }
}

export const selectUserIncome = data => dispatch => {
  try {
    dispatch({
      type: SELECT_USER_INCOME,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserIncome Api Call')
  }
}

export const addUserIncome = (userId, incomeData) => async dispatch => {
  try {
    const { data } = await api.post(`/income/${userId}`, incomeData)
    dispatch({
      type: ADD_USER_INCOME,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in addUserIncome Api Call')
  }
}

export const updateUserIncome = (incomeId, incomeData) => async dispatch => {
  try {
    const { data } = await api.put(`/income/${incomeId}`, incomeData)
    dispatch({
      type: UPDATE_USER_INCOME,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in updateUserIncome Api Call')
  }
}

export const deleteUserIncome = incomeId => async dispatch => {
  try {
    const { data } = await api.delete(`/income/${incomeId}`)
    dispatch({
      type: DELETE_USER_INCOME,
      payload: data
    })
    return true
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in deleteUserIncome Api Call')
  }
}
