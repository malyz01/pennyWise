/* eslint-disable no-console */
import {
  ADD_USER_INCOME,
  DELETE_USER_INCOME,
  GET_USER_INCOME,
  UPDATE_USER_INCOME,
  SELECT_USER_INCOME
} from '../types'
import api from '../../api'
import { loading } from './loading'

export const getUserIncome = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/income/${userId}`)
    dispatch({
      type: GET_USER_INCOME,
      payload: data
    })
    dispatch(loading('income', false))
  } catch (err) {
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
    console.log('error in addUserIncome Api Call')
  }
}

export const addUserIncome = (userId, incomeData) => async (dispatch) => {
  try {
    const { data } = await api.post(`/income/${userId}`, incomeData)
    dispatch({
      type: ADD_USER_INCOME,
      payload: data
    })
  } catch (err) {
    console.log(err.message)
    console.log('error in addUserIncome Api Call')
  }
}

export const updateUserIncome = (incomeId, incomeData) => async (dispatch) => {
  try {
    const { data } = await api.put(`/income/${incomeId}`, incomeData)
    dispatch({
      type: UPDATE_USER_INCOME,
      payload: data
    })
  } catch (err) {
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
    console.log('error in deleteUserIncome Api Call')
  }
}
