import { GET_LOADING_PENDING } from '../types'

export const loading = (bool) => ({
  type: GET_LOADING_PENDING,
  payload: bool
})