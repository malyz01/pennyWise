import { TEST } from '../types'

const INITIAL = {
  test: null
}

export default (state = INITIAL, actions) => {
  switch (actions.type) {
    case TEST:
      return state
    default:
      return state
  }
}
