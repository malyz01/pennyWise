import { GET_USER_PROFILE } from '../types'

const INITIAL = null

export default (state = INITIAL, actions) => {
  switch (actions.type) {
    case GET_USER_PROFILE:
      return actions.payload
    default:
      return state
  }
}
