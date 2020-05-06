import { TEST } from '../types'

export const setTest = (receivedData) => dispatch => {
  dispatch({
    type: TEST,
    payload: receivedData
  })
}
