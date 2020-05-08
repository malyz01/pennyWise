const conn = require('../connection')

function getIncomes (db = conn) {
  return db('income')
    .select()
}

function getIncome (userId, db = conn) {
  return db('income')
    .where('user_id', userId)
}

function addIncome (data, db = conn) {  
  return db('income')
    .insert(data)
    .then(([id]) => db('income').where('id', id).select().first())
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

// Not too certain
function updateIncome (data, db = conn) {
  // eslint-disable-next-line no-console
  console.log(data)

  return db('income')
    .where('user_id', data.userId)
    .update(data)
    .then(() => db('income').where('id', data.userId).select().first())
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteIncome (userId, db = conn) {
  return db('income')
    .where('user_id', userId)
    .del()
}

module.exports = {
  getIncome,
  getIncomes,
  addIncome,
  updateIncome,
  deleteIncome
}
