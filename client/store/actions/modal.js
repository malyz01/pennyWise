import {
  SET_MODAL_OPEN,
  SET_MODAL_NAME,
  SET_MODAL_AUTH_OPEN,
  SET_MODAL_AUTH_FORM,
  SET_MODAL_EXPENSE_OPEN,
  SET_MODAL_EXPENSE_FORM,
  SET_MODAL_INCOME_OPEN,
  SET_MODAL_INCOME_FORM,
  SET_MODAL_GOAL_OPEN,
  SET_MODAL_GOAL_FORM
} from '../types'

export const setModalOpen = (open) => ({
  type: SET_MODAL_OPEN,
  payload: open
})

export const setModalName = (name) => ({
  type: SET_MODAL_NAME,
  payload: name
})

export const setModalAuthOpen = (bool) => ({
  type: SET_MODAL_AUTH_OPEN,
  payload: bool
})

export const setModalAuthForm = (form) => ({
  type: SET_MODAL_AUTH_FORM,
  payload: form
})

export const setModalExpenseOpen = (bool) => ({
  type: SET_MODAL_EXPENSE_OPEN,
  payload: bool
})

export const setModalExpenseForm = (form) => ({
  type: SET_MODAL_EXPENSE_FORM,
  payload: form
})

export const setModalIncomeOpen = (bool) => ({
  type: SET_MODAL_INCOME_OPEN,
  payload: bool
})

export const setModalIncomeForm = (form) => ({
  type: SET_MODAL_INCOME_FORM,
  payload: form
})

export const setModalGoalOpen = (bool) => ({
  type: SET_MODAL_GOAL_OPEN,
  payload: bool
})

export const setModalGoalForm = (form) => ({
  type: SET_MODAL_GOAL_FORM,
  payload: form
})

export default {
  setModalAuthOpen,
  setModalAuthForm
}
