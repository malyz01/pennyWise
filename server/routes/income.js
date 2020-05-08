const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/income')

// GET - /api/v1/income/
// postman testing COMPLETE
router.get('/', (req, res) => {
  return db
    .getIncomes()
    .then(camelcaseKeys)
    .then((income) => res.json(income))
    .catch(() => res.sendStatus(500))
})
// GET - /api/v1/income/:userId
router.get('/:userId', (req, res) => {
  return db
    .getIncome(req.params.userId)
    .then(camelcaseKeys)
    .then((income) => res.json(income))
    .catch(() => res.sendStatus(500))
})
// // POST /api/v1/income/:userId
// router.post('/:userId', (req, res) => {
//   return db
//     .addIncome(req.params.userId, req.body)
//     .then(income => res.sendStatus(200).json(income))
//     .catch(() => res.sendStatus(500))
// })

// // PUT /api/v1/income/:userId
// router.put('/:incomeId', (req, res) => {
//   return db
//     .updateIncome(req.params.incomeId, req.body)
//     .then(income => res.sendStatus(200).json(income))
//     .catch(() => res.sendStatus(500))
// })
module.exports = router
