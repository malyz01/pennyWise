import { SET_GLOBAL_STATE } from '../types'

export default (state = 'Weekly', action) => {
  switch (action.type) {
    case SET_GLOBAL_STATE:
      return action.payload
    default:
      return state
  }
}
