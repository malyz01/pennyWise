/* eslint-disable no-console */
const connection = require('../connection')
const snakeCaseKeys = require('snakecase-keys')
const convertToNumber = (expense) =>
  expense.map((e) => ({
    ...e,
    expense_amount: parseFloat(e.expense_amount)
  }))

function getAllExpenses (db = connection) {
  return db('expense')
    .select()
    .catch(err => {
      console.error(err)
    })
}

function getUserExpenses (userId, db = connection) {
  return db('expense')
    .where('user_id', userId)
    .select()
    .then(convertToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function addUserExpense (data, db = connection) {
  return db('expense')
    .insert(snakeCaseKeys(data))
    .then(([id]) => db('expense').where('id', id).select().first())
    .then(convertToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function updateUserExpense (expenseId, data, db = connection) {
  return db('expense')
    .where('id', expenseId)
    .update(snakeCaseKeys(data))
    .then(() => db('expense').where('id', expenseId).select().first())
    .then(convertToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function deleteUserExpense (expenseId, db = connection) {
  return db('expense')
    .where('id', expenseId)
    .del()
    .catch(err => {
      console.error(err)
    })
}

module.exports = {
  getAllExpenses,
  getUserExpenses,
  addUserExpense,
  updateUserExpense,
  deleteUserExpense
}
