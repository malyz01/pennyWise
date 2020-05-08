import {
  GET_USER_EXPENSES,
  ADD_USER_EXPENSE,
  UPDATE_USER_EXPENSE,
  DELETE_USER_EXPENSE
} from '../types'

const INITIAL_STATE = {
  all: [],
  selected: null
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_USER_EXPENSES:
      return { ...state, all: payload }
    case ADD_USER_EXPENSE:
      return { ...state, all: [ ...state.all, payload ] }
    case UPDATE_USER_EXPENSE:
      return { all: [ ...state.all, payload ], selected: payload }
    case DELETE_USER_EXPENSE:
      return { all: state.all.filter(e => e.id !== payload), selected: null }
    default:
      return state
  }
}
