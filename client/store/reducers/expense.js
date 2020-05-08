import { ADD_USER_EXPENSE, DELETE_USER_EXPENSE, GET_USER_EXPENSE, UPDATE_USER_EXPENSE } from '../types'

const INITIAL_STATE = {}

export const addExpenseReducer (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_EXPENSE:
      return {
        user: { ...action.payload }
      }
    default:
      return state
  }
}

export default expense