const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/expense')

router.get('/', (req, res) => {
  return db
    .getExpense()
    .then(camelcaseKeys)
    .then((expense) => res.json(expense))
})

module.exports = router
