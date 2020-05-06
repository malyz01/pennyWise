import { TEST } from '../types'

const INITIAL = null

export default (state = INITIAL, actions) => {
  switch (actions.type) {
    case TEST:
      return actions.payload
    default:
      return state
  }
}
