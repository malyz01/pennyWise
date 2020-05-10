import { SET_MODAL_OPEN, SET_MODAL_NAME } from '../types'

export const setModalOpen = (open) => ({
  type: SET_MODAL_OPEN,
  payload: open
})

export const setModalName = (name) => ({
  type: SET_MODAL_NAME,
  payload: name
})
