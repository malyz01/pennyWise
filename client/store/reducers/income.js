import {
  GET_USER_INCOME,
  ADD_USER_INCOME,
  UPDATE_USER_INCOME,
  DELETE_USER_INCOME
} from '../types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_INCOME:
      return action.payload
    case ADD_USER_INCOME:
    case UPDATE_USER_INCOME:
      return [...state, action.payload]
    case DELETE_USER_INCOME:
      return state.filter((income) => income.id !== Number(action.payload))
    default:
      return state
  }
}
