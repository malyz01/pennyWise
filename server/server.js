require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static(path.resolve('server', 'public')))

server.use('/api/v1/auth', require('./routes/auth'))
server.use('/api/v1/users', require('./routes/profiles'))
server.use('/api/v1/expense', require('./routes/expense'))
server.use('/api/v1/income', require('./routes/income'))
server.use('/api/v1/budget', require('./routes/budget'))

module.exports = server
