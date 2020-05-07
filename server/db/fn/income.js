const conn = require('../connection')

function getIncome (db = conn) {
  return db('income')
}

module.exports = {
  getIncome
}
