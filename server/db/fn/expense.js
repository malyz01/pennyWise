const connection = require('../connection')

function getAllExpenses (db = connection) {
  return db('expense')
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function getUserExpenses (userId, db = connection) {
  return db('expense')
    .where('user_id', userId)
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function addUserExpense (data, db = connection) {
  return db('expense')
    .insert(data)
    .then(([id]) =>
      db('expense')
        .where('id', id)
        .select()
        .first()
    )
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function updateUserExpense (expenseId, data, db = connection) {
  return db('expense')
    .where('id', expenseId)
    .update(data)
    .then(() =>
      db('expense')
        .where('id', expenseId)
        .select()
        .first()
    )
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteUserExpense (expenseId, db = connection) {
  return db('expense')
    .where('id', expenseId)
    .del()
    .catch(err => {
      // eslint-disable-next-line no-console
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
