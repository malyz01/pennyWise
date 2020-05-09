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

function addUserIncome (data, db = connection) {
  return db('income')
    .insert(data)
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
    .update({
      id: data.id,
      user_id: data.userId,
      expense_name: data.expenseName,
      categories: data.categories,
      frequency: data.frequency,
      expense_amount: data.expenseAmount,
      active: data.active
    })
    .then(() =>
      db('income')
        .where('id', incomeId)
        .select()
        .first()
    )
    .catch(err => {
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
