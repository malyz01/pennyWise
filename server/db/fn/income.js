const connection = require('../connection')

function getAllIncomes (db = connection) {
  return db('income')
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function getUserIncomes (userId, db = connection) {
  return db('income')
    .where('user_id', userId)
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function addIncome (data, db = connection) {
  return db('income')
    .insert(data)
    .then(([id]) => db('income')
      .where('id', id)
      .select()
      .first())
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function updateIncome (incomeId, data, db = connection) {
  return db('income')
    .where('id', incomeId)
    .update(data)
    .then(() => db('income')
      .where('id', incomeId)
      .select()
      .first()
    )
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteIncome (incomeId, db = connection) {
  return db('income')
    .where('id', incomeId)
    .del()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

module.exports = {
  getAllIncomes,
  getUserIncomes,
  addIncome,
  updateIncome,
  deleteIncome
}
