import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import modal from './modal'

export default combineReducers({
  auth,
  user,
  modal
})
