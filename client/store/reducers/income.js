import {
  GET_USER_INCOME,
  ADD_USER_INCOME,
  UPDATE_USER_INCOME,
  DELETE_USER_INCOME,
  SELECT_USER_INCOME,
  CLEAR_USER_INCOME
} from '../types'

const INITIAL_STATE = {
  all: [],
  selected: null
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload = null } = action
  switch (type) {
    case GET_USER_INCOME:
      return { ...state, all: payload }
    case ADD_USER_INCOME:
      return { ...state, all: [ ...state.all, payload ] }
    case SELECT_USER_INCOME:
      return { ...state, selected: payload }
    case UPDATE_USER_INCOME:
      return {
        all: state.all.map((e) => {
          if (e.id === payload.id) return payload
          return e
        }),
        selected: payload
      }
    case DELETE_USER_INCOME:
      return { all: state.all.filter(e => e.id !== payload), selected: null }
    case CLEAR_USER_INCOME:
      return { ...state, all: [] }
    default:
      return state
  }
}
