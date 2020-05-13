import { SET_LOADING_PENDING } from '../actions/loading'
import loading from './loading'

test('SET_LOADING_PENDING should return true', () => {
  const action = {
    type: SET_LOADING_PENDING
  }
  const newLoadingState = loading(true, action)
  //   console.log(newLoadingState)
  expect(newLoadingState).toBeTruthy()
})
