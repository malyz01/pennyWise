import { combineReducers } from 'redux'
import auth from './auth'
import modal from './modal'

export default combineReducers({
  auth,
  modal
})
