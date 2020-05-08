const connection = require('../connection')

function getExpense (userId, db = connection) {
  return db('expense')
    .where('user_id', userId)
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function addExpense (data, db = connection) {
  return db('expense')
    .insert(data)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

// Not too certain
function updateExpense (data, db = connection) {
  return db('expense')
    .where('user_id', data.userId)
    .update(data)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteExpense (userId, db = connection) {
  return db('expense')
    .where('user_id', userId)
    .del()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function getExpensesForSingleUser (id, db = connection) {
  return db('expense')
    .where('expense.user_id', id)
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

module.exports = {
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense,
  getExpensesForSingleUser
}
