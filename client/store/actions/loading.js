import { LOADING } from '../types'

export const loading = (bool) => ({
  type: LOADING,
  payload: bool
})