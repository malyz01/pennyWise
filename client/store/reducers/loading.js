import {
  SET_LOADING_PENDING
} from '../types'

const INITIAL_STATE = {
  budget: true,
  expense: true,
  goals: true,
  income: true,
  user: true
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING_PENDING:
      return { ...state, [action.name]: action.pending }
    default:
      return state
  }
}
