import { SET_GLOBAL_STATE } from '../types'

export const setGlobalState = (state) => ({
  type: SET_GLOBAL_STATE,
  payload: state
})
