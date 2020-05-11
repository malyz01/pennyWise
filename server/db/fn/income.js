const connection = require('../connection')
const snakeCaseKeys = require('snakecase-keys')

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

function addUserIncome (data, db = connection) {
  return db('income')
    .insert(snakeCaseKeys(data))
    .then(([id]) =>
      db('income')
        .where('id', id)
        .select()
        .first()
    )
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function updateUserIncome (incomeId, data, db = connection) {
  return db('income')
    .where('id', incomeId)
    .update(snakeCaseKeys(data))
    .then(() => db('income').where('id', incomeId).select().first())
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteUserIncome (incomeId, db = connection) {
  return db('income')
    .where('id', incomeId)
    .del()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

module.exports = {
  getAllIncomes,
  getUserIncomes,
  addUserIncome,
  updateUserIncome,
  deleteUserIncome
}
