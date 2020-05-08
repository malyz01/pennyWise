const connection = require('../connection')

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
  getExpensesForSingleUser
}
