const connection = require('../connection')
const camelcaseKeys = require('camelcase-keys')

function getUserBudget (userId, db = connection) {
  return db('goals')
    .where('user_id', userId)
    .select()
    .then(camelcaseKeys)
    .then((goals) => {
      return db('expense')
        .where('user_id', userId)
        .select()
        .then((expense) => {
          return {
            goals,
            expense: camelcaseKeys(expense)
          }
        })
    })
    .then((resincome) => {
      return db('income')
        .where('user_id', userId)
        .select()
        .then((income) => {
          return {
            income: camelcaseKeys(income),
            ...resincome
          }
        })
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

module.exports = {
  getUserBudget
}
