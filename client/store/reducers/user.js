import { GET_USER_PROFILE, GET_USER_DETAILS } from '../types'

const INITIAL = {
  profile: null,
  userData: null
}

export default (state = INITIAL, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return { ...state, profile: action.payload }
    case GET_USER_DETAILS:
      return { ...state, userData: action.payload }
    default:
      return state
  }
}
