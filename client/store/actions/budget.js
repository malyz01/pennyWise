import api from '../../api'
import {
  GET_USER_EXPENSES,
  GET_USER_INCOME,
  GET_USER_GOALS
} from '../types'
import { loading } from './loading'

export const getUserBudget = userId => async dispatch => {
  dispatch(loading(true))
  try {
    const { data: { expense, income, goals } } = await api.get(`/budget/${userId}`)
    console.log('expense', expense)
    console.log('income', income)
    dispatch({
      type: GET_USER_EXPENSES,
      payload: expense
    })
    dispatch({
      type: GET_USER_INCOME,
      payload: income
    })
    dispatch({
      type: GET_USER_GOALS,
      payload: goals
    })
    dispatch(loading('budget', false))
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserGoals Api Call')
  }
}
