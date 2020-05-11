import { GET_USER_PROFILE } from '../types'

const INITIAL = {
  profile: null
}

export default (state = INITIAL, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return { ...state, profile: action.payload }
    default:
      return state
  }
}
