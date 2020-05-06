const knex = require('knex')
const envr = process.env.NODE_ENV || 'development'
const conn = knex(require('./knexfile')[envr])

module.exports = conn
