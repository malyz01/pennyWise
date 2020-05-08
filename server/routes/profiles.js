const router = require('express').Router()
const camelcaseKeys = require('camelcase-keys')

const db = require('../db/fn/profiles')

router.get('/', (req, res) => {
  return db
    .getProfiles()
    .then(camelcaseKeys)
    .then((profiles) => res.json(profiles))
})

module.exports = router
