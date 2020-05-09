import {
  SET_MODAL,
  SET_MODAL_AUTH_OPEN,
  SET_MODAL_AUTH_FORM,
  SET_MODAL_EXPENSE_FORM,
  SET_MODAL_EXPENSE_OPEN,
  SET_MODAL_INCOME_FORM,
  SET_MODAL_INCOME_OPEN,
  SET_MODAL_GOAL_FORM,
  SET_MODAL_GOAL_OPEN
} from '../types'

const INITIAL_STATE = {
  form: '',
  open: false,
  auth: {
    form: '',
    open: false
  },
  expense: {
    form: '',
    open: false
  },
  income: {
    form: '',
    open: false
  },
  goal: {
    form: '',
    open: false
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODAL:
      return { form: action.form, open: action.open }
    case SET_MODAL_AUTH_OPEN:
      return { ...INITIAL_STATE, auth: { ...state.auth, open: action.payload } }
    case SET_MODAL_AUTH_FORM:
      return { ...INITIAL_STATE, auth: { ...state.auth, form: action.payload } }
    case SET_MODAL_EXPENSE_OPEN:
      return {
        ...INITIAL_STATE,
        expense: { ...state.expense, open: action.payload }
      }
    case SET_MODAL_EXPENSE_FORM:
      return {
        ...INITIAL_STATE,
        expense: { ...state.expense, form: action.payload }
      }
    case SET_MODAL_INCOME_OPEN:
      return {
        ...INITIAL_STATE,
        income: { ...state.income, open: action.payload }
      }
    case SET_MODAL_INCOME_FORM:
      return {
        ...INITIAL_STATE,
        income: { ...state.income, form: action.payload }
      }
    case SET_MODAL_GOAL_OPEN:
      return {
        ...INITIAL_STATE,
        goal: { ...state.goal, open: action.payload }
      }
    case SET_MODAL_GOAL_FORM:
      return {
        ...INITIAL_STATE,
        goal: { ...state.goal, form: action.payload }
      }
    default:
      return state
  }
}
