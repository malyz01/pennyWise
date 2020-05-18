/* eslint-disable no-console */
const connection = require('../connection')
const snakeCaseKeys = require('snakecase-keys')
const convertArrToNumber = (income) =>
  income.map((i) => ({
    ...i,
    income_amount: parseFloat(i.income_amount)
  }))
const convertToNumber = (income) =>
  ({
    ...income,
    income_amount: parseFloat(income.income_amount)
  })

// function getAllIncomes (db = connection) {
//   return db('income')
//     .select()
//     .catch(err => {
//       // eslint-disable-next-line no-console
//       console.error(err)
//     })
// }

function getUserIncomes (userId, db = connection) {
  return db('income')
    .where('user_id', userId)
    .select()
    .then(convertArrToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function addUserIncome (data, db = connection) {
  return db('income')
    .insert(snakeCaseKeys(data))
    .returning('id')
    .then(([id]) => db('income').where('id', id).select().first())
    .then(convertToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function updateUserIncome (incomeId, data, db = connection) {
  return db('income')
    .where('id', incomeId)
    .update(snakeCaseKeys(data))
    .then(() => db('income').where('id', incomeId).select().first())
    .then(convertToNumber)
    .catch((err) => {
      console.error(err)
    })
}

function deleteUserIncome (incomeId, db = connection) {
  return db('income')
    .where('id', incomeId)
    .del()
    .catch(err => {
      console.error(err)
    })
}

module.exports = {
  getUserIncomes,
  addUserIncome,
  updateUserIncome,
  deleteUserIncome
}
