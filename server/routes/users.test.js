const request = require('supertest')
const server = require('../server')

jest.mock('../db/fn/user', () => {
  return {
    getProfiles: function () {
      return Promise.resolve([
        { id: 1, user_id: 2001, full_name: 'John Doe', avatar: '' },
        { id: 1, user_id: 2002, full_name: 'John Doe', avatar: '' },
        { id: 1, user_id: 2003, full_name: 'John Doe', avatar: '' },
        { id: 1, user_id: 2004, full_name: 'John Doe', avatar: '' },
        { id: 1, user_id: 2005, full_name: 'John Doe', avatar: '' }
      ])
    }
  }
})

test('test that the correct amount of profiles are returned', () => {
  return request(server)
    .get('/api/v1/users/')
    .then(users => {
      expect(users.body.length).toBe(5)
    })
})
