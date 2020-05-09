const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/goal')

// GET - api/v1/goal/
// postman testing COMPLETE
router.get('/', (req, res) => {
  return db
    .getAllGoals()
    .then(camelcaseKeys)
    .then((goals) => res.json(goals))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET - /api/v1/goal/:userId
// postman testing COMPLETE
router.get('/:userId', (req, res) => {
  return db
    .getUserGoals(req.params.userId)
    .then(camelcaseKeys)
    .then(goals => res.json(goals))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
