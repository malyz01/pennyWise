const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/goal')

// GET - api/v1/goals/
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

// GET - /api/v1/goals/:userId
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

// POST - /api/v1/goals/:userId
// postman testing COMPLETE
router.post('/:userId', (req, res) => {
  const newGoal = req.body
  return db
    .addGoal({ user_id: req.params.userId, ...newGoal })
    .then(camelcaseKeys)
    .then(goals => res.status(200).json(goals))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// PUT - /api/v1/goals/:userId
// postman testing COMPLETE
router.put('/:goalId', (req, res) => {
  return db
    .updateGoal(req.params.goalId, req.body)
    .then(camelcaseKeys)
    .then(goal => res.status(200).json(goal))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// DELETE - /api/v1/goals/:goalId
// postman testing COMPLETE
router.delete('/:goalId', (req, res) => {
  return db
    .deleteGoal(req.params.goalId)
    .then(camelcaseKeys)
    .then(() => res.status(200).json(req.params.goalId))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
