import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import modal from './modal'
import expense from './expense'
import income from './income'

export default combineReducers({
  auth,
  user,
  modal,
  expense,
  income
})
