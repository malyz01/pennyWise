import { GET_USER_PROFILE } from '../types'

const INITIAL = null

export default (state = INITIAL, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return action.payload
    default:
      return state
  }
}
