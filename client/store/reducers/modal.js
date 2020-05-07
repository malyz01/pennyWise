import {
  SET_MODAL_AUTH_OPEN,
  SET_MODAL_AUTH_FORM
} from '../types'

const INITIAL_STATE = {
  auth: {
    form: '',
    open: false
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODAL_AUTH_OPEN:
      return { ...state, auth: { ...state.auth, open: action.payload } }
    case SET_MODAL_AUTH_FORM:
      return { ...state, auth: { ...state.auth, form: action.payload } }
    default:
      return state
  }
}
