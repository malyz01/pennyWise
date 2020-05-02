require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static(path.resolve('server', 'public')))

module.exports = server
