import {
  GET_LOADING_PENDING
} from '../types'

export default (state = false, action) => {
  switch (action.type) {
    case GET_LOADING_PENDING:
      return action.payload // load the loading text or icon
    default:
      return state
  }
}
