import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import modal from './modal'
import expense from './expense'
import income from './income'
import goal from './goal'

export default combineReducers({
  auth,
  user,
  income,
  expense,
  modal,
  goal
})
