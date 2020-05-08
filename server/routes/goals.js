const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/goals')

router.get('/', (req, res) => {
  return db
    .getGoals()
    .then(camelcaseKeys)
    .then((goals) => res.json(goals))
})

module.exports = router
