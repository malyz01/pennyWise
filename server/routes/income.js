const express = require("express")
const camelcaseKeys = require("camelcase-keys")

const db = require("../db/fn/income")
const server = express.Router()

router.get("/", (req, res) => {
  return db
    .getIncome()
    .then(camelcaseKeys)
    .then((income) => res.json("Hello"))
})

module.exports = router
