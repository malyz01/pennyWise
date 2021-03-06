const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

server.use(cors())
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static(path.resolve('server', 'public')))

server.use('/api/v1/auth', require('./routes/auth'))
server.use('/api/v1/users', require('./routes/users'))
server.use('/api/v1/expense', require('./routes/expense'))
server.use('/api/v1/income', require('./routes/income'))
server.use('/api/v1/budget', require('./routes/budget'))
server.use('/api/v1/goals', require('./routes/goal'))

module.exports = server
