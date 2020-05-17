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
    const exp = expense.map(e => ({ ...e, expenseAmount: Number(e.expenseAmount) }))
    const inc = income.map(i => ({ ...i, incomeAmount: Number(i.incomeAmount) }))
    const goal = goals.map(g => ({ ...g, targetBudget: Number(g.targetBudget), currentAmount: Number(g.currentAmount), budgetDistribution: Number(g.budgetDistribution) }))

    dispatch({
      type: GET_USER_EXPENSES,
      payload: exp
    })
    dispatch({
      type: GET_USER_INCOME,
      payload: inc
    })
    dispatch({
      type: GET_USER_GOALS,
      payload: goal
    })
    dispatch(loading('budget', false))
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error in getUserGoals Api Call')
  }
}
