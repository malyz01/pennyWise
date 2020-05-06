import { SET_AUTH } from '../types'

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        isAuthenticated: !!Object.keys(action.payload)[0],
        user: { ...action.payload }
      }
    default:
      return state
  }
}
