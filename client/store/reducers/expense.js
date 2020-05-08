import {
  GET_USER_EXPENSE,
  ADD_USER_EXPENSE,
  UPDATE_USER_EXPENSE,
  DELETE_USER_EXPENSE
} from '../types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_EXPENSE:
      return action.payload
    case ADD_USER_EXPENSE:
    case UPDATE_USER_EXPENSE:
      return [...state, action.payload]
    case DELETE_USER_EXPENSE:
      return state.filter((expense) => expense.id !== Number(action.payload))
    default:
      return state
  }
}
