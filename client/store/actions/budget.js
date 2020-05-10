import api from '../../api'
import { GET_USER_EXPENSES, GET_USER_INCOME, GET_USER_GOALS } from '../types'

export const getUserBudget = userId => async dispatch => {
  try {
    const { data } = await api.get(`/budget/${userId}`)
    dispatch({
      type: GET_USER_EXPENSES,
      payload: data
    })
    dispatch({
      type: GET_USER_INCOME,
      payload: data
    })
    dispatch({
      type: GET_USER_GOALS,
      payload: data
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserGoals Api Call')
  }
}
