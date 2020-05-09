import {
  GET_USER_GOALS,
  ADD_USER_GOALS,
  DELETE_USER_GOALS,
  UPDATE_USER_GOALS,
  CLEAR_USER_GOALS,
  SELECT_USER_GOALS
} from '../types'

const INITIAL_STATE = {
  all: [],
  selected: null
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload = null } = action
  switch (type) {
    case GET_USER_GOALS:
      return { ...state, all: payload }
    case ADD_USER_GOALS:
      return { ...state, all: [...state.all, payload] }
    case DELETE_USER_GOALS:
      return { ...state, all: state.all.filter(goal => goal !== payload) }
    case UPDATE_USER_GOALS:
      return { ...state,
        all: state.all.map(goal => {
          if (goal.id === payload.id) {
            return payload
          }
          return goal
        }),
        selected: payload
      }
    case CLEAR_USER_GOALS:
      return {
        ...state,
        all: [],
        selected: null
      }
    case SELECT_USER_GOALS:
      return {
        ...state,
        selected: payload
      }
    default:
      return state
  }
}