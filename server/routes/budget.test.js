const request = require('supertest')
const server = require('../server')

jest.mock('../db/fn/budget', () => {
  return {
    getUserBudget: () => {
      return Promise.resolve({
        id: 1,
        user_id: 1211,
        goal_name: 'Getting Masters',
        target_budget: 1500,
        target_date: '2023-1-15',
        budget_distribution: 10
      })
    }
  }
})

test('GET /:userId returns the correct budget', () => {
  return request(server)
    .get('/api/v1/budget/1211')
    .then(res => {
    //   console.log(res.body)
      expect(res.body.target_budget).toBe(1500)
    })
})
