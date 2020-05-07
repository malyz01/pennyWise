import {
  SET_MODAL_AUTH_OPEN,
  SET_MODAL_AUTH_FORM
} from '../types'

export const setModalAuthOpen = (bool) => ({
  type: SET_MODAL_AUTH_OPEN,
  payload: bool
})

export const setModalAuthForm = (form) => ({
  type: SET_MODAL_AUTH_FORM,
  payload: form
})

export default {
  setModalAuthOpen,
  setModalAuthForm
}
