import { ADD_USER_EXPENSE, DELETE_USER_EXPENSE, GET_USER_EXPENSE, UPDATE_USER_EXPENSE } from '../types'

const INITIAL_STATE = []

// Sensei/Someone else needs to check/finish my half-assed job (Raymond) <3 <3
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_EXPENSE:
      return action.payload
    case ADD_USER_EXPENSE:
      return [...state, action.payload]
    default:
      return state
  }
}
