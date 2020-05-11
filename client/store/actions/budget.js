import api from '../../api'
import { GET_USER_EXPENSES, GET_USER_INCOME, GET_USER_GOALS, GET_LOADING_PENDING, GET_LOADING_SUCCESS } from '../types'

export const getUserBudgetSuccess = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_LOADING_SUCCESS,
      payload: userId.all // return user data
    })
  } catch (err) {
    console.log('there was an error with getUserGoalsSuccess action type')
  }
}

export const getUserBudgetPending = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_LOADING_PENDING
    })
  } catch (err) {
    console.log('there was an error with getUserGoalsSuccess action type')
  }
}

export const getUserBudget = userId => async dispatch => {
  try {
    const { data: { expense, income, goals } } = await api.get(`/budget/${userId}`)
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
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserGoals Api Call')
  }
}
