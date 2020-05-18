/* eslint-disable no-console */
const connection = require('../connection')
const snakeCaseKeys = require('snakecase-keys')
const convertArrToNumber = (expense) =>
  expense.map((e) => ({
    ...e,
    expense_amount: parseFloat(e.expense_amount)
  }))
const convertToNumber = (expense) => ({
  ...expense,
  expense_amount: parseFloat(expense.expense_amount)
})

// function getAllExpenses (db = connection) {
//   return db('expense')
//     .select()
//     .catch(err => {
//       console.error(err)
//     })
// }

function getUserExpenses (userId, db = connection) {
  return db('expense')
    .where('user_id', userId)
    .select()
    .then(convertArrToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function addUserExpense (data, db = connection) {
  return db('expense')
    .insert(snakeCaseKeys(data))
    .returning('id')
    .then(([id]) => db('expense').where('id', id).select().first())
    .then(convertToNumber)
    .catch((err) => {
      console.error(err.message)
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
  getUserExpenses,
  addUserExpense,
  updateUserExpense,
  deleteUserExpense
}
