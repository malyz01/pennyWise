const connection = require('../connection')

function getUserBudget (userId, db = connection) {
  return db('goals')
    .where('user_id', userId)
    .select()
    .then(res => {
      console.log(res)
      return res
    }
    ).then(goals => {
      return (
        db('expense')
          .where('user_id', userId)
          .select()
          .then(expense => {
            return {
              goals,
              expense
            }
          })
      )
    }).then(resincome => {
      return (
        db('income')
          .where('user_id', userId)
          .select()
          .then(income => {
            return {
              income,
              ...resincome
            }
          }
          )
      )
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

module.exports = {
  getUserBudget
}
