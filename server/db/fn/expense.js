const conn = require('../connection')

function getExpense (userId, db = conn) {
  return db('expense')
    .where('user_id', userId)
}

function addExpense (data, db = conn) {
  return db('expense')
    .insert(data)
}

// Not too certain
function updateExpense (data, db = conn) {
  return db('expense')
    .where('user_id', data.userId)
    .update(data)
}

function deleteExpense (userId, db = conn) {
  return db('expense')
    .where('user_id', userId)
    .del()
}

module.exports = {
  getExpense,
  addExpense,
  updateExpense,
  deleteExpense
}
