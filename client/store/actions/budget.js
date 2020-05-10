import api from '../../api'
import { GET_USER_EXPENSES, GET_USER_INCOME, GET_USER_GOALS } from '../types'

export const getUserBudget = userId => async dispatch => {
  try {
    const { data } = await api.get(`/expense/${userId}`)
    dispatch({
      type: GET_USER_EXPENSES,
      payload: data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserBudget Api Call')
  }
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
  try {
    const { data } = await api.get(`/goals/${userId}`)
    dispatch({
      type: GET_USER_GOALS,
      payload: data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserGoals Api Call')
  }
}
