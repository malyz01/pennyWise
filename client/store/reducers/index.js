import { combineReducers } from 'redux'
import test from './test'
import auth from './auth'
import modal from './modal'

export default combineReducers({
  auth,
  test,
  modal
})
