const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/income')

// GET - /api/v1/income/
// postman testing COMPLETE
router.get('/', (req, res) => {
  return db
    .getAllIncomes()
    .then(camelcaseKeys)
    .then(income => res.json(income))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET - /api/v1/income/:userId
// postman testing COMPLETE
router.get('/:userId', (req, res) => {
  return db
    .getUserIncomes(req.params.userId)
    .then(camelcaseKeys)
    .then(income => res.json(income))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// POST - /api/v1/income/:userId
// postman testing COMPLETE
router.post('/:userId', (req, res) => {
  const { incomeName, incomeType, incomeAmount, frequency } = req.body
  return db
    .addUserIncome({
      user_id: req.params.userId,
      income_type: incomeType,
      income_name: incomeName,
      income_amount: incomeAmount,
      frequency
    })
    .then(camelcaseKeys)
    .then(income => res.status(200).json(income))
    .catch(err => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// PUT - /api/v1/income/:incomeId
// postman testing COMPLETE
router.put('/:incomeId', (req, res) => {
  return db
    .updateUserIncome(req.params.incomeId, req.body)
    .then(camelcaseKeys)
    .then(income => res.status(200).json(income))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// DELETE - /api/v1/income/:incomeId
// postman testing COMPLETE
router.delete('/:incomeId', (req, res) => {
  return db
    .deleteUserIncome(req.params.incomeId)
    .then(camelcaseKeys)
    .then(() => res.send(200).json(req.params.incomeId))
    .catch(err => {
      res.status(500).send(err.message)
    })
})
module.exports = router
