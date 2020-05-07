const router = require("express").Router()
const camelcaseKeys = require("camelcase-keys")

const db = require("../db/fn/income")

router.get("/", (req, res) => {
  return db
    .getIncome()
    .then(camelcaseKeys)
    .then((income) => res.json("Hello"))
})

module.exports = router
