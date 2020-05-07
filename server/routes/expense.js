const express = require("express")
const camelcaseKeys = require("camelcase-keys")

const db = require("../db/fn/expense")
const server = express.Router()

// router.get('/', (req, res) => {
//   return db.getFoods()
//     .then(camelcaseKeys)
//     .then(foods => res.status(200).json(foods))
// })

module.exports = router
