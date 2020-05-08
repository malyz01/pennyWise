const conn = require('../connection')

function getIncome (userId, db = conn) {
  return db('income')
    .where('user_id', userId)
}

function addIncome (data, db = conn) {
  return db('income')
    .insert(data)
}

// Not too certain
function updateIncome (data, db = conn) {
  return db('income')
    .where('user_id', data.userId)
    .update(data)
}

function deleteIncome (userId, db = conn) {
  return db('income')
    .where('user_id', userId)
    .del()
}

module.exports = {
  getIncome,
  addIncome,
  updateIncome,
  deleteIncome
}
