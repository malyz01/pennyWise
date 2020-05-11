import { SET_LOADING_PENDING } from '../types'

export const loading = (name, bool) => ({
  type: SET_LOADING_PENDING,
  name,
  pending: bool
})