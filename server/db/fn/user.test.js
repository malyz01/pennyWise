const env = require('../../../tests/server/db/test-environment')
const db = require('./user')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getUserDetails returns the correct information based on id', () => {
  return db.getUserDetails(1005, testDb)
    .then(details => {
      expect(details.fullName).toBe('Jimmi')
      expect(details.email).toBe('jimmi@testing.com')
    })
})

test('db.deleteUserById deletes a user', () => {
  return db.deleteUserById(1005, testDb)
    .then(() => {
      return db.getUsers(testDb)
        .then(users => {
          const exists = users.some(food => food.id === 1005)
          expect(users).toHaveLength(5)
          expect(exists).toBe(false)
        })
    })
})
