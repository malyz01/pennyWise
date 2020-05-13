const request = require('supertest')
const server = require('../server')

jest.mock('../db/fn/user', () => {
  return {
    getProfiles: function () {
      return Promise.resolve([
        { id: 1, user_id: 2001, full_name: 'John Doe', avatar: '' },
        { id: 2, user_id: 2002, full_name: 'James Doe', avatar: '' },
        { id: 3, user_id: 2003, full_name: 'Jimmy Doe', avatar: '' },
        { id: 4, user_id: 2004, full_name: 'Jason Doe', avatar: '' },
        { id: 5, user_id: 2005, full_name: 'Jack Doe', avatar: '' }
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

// test('getUserProfile route returns the correct user', () => {
//   return request(server)
//     .get('/api/v1/users/2004/profile')
//     .then(user => {
//       expect(user.body.full_name).toBe('Jason Doe')
//       expect(user.body.id).toBe(4)
//     })
// })
