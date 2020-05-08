const env = require('../../tests/server/db/test-environment')
const db = require('./user')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))
