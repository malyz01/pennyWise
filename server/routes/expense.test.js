const request = require('supertest')
const server = require('../server')

jest.mock('../db/fn/expense', () => {
  return {
    getUserExpenses: () => {
      return Promise.resolve({
        id: 1111,
        categories: 'essential',
        expense_name: 'food',
        frequency: 'weekly',
        expense_amount: '100'
      })
    }
  }
})

test('GET /:userId returns the correct expenses', () => {
  return request(server)
    .get('/api/v1/expense/1001')
    .set({ 'Authorization': `Bearer ${process.env.TOKEN}`, 'Content-Type': 'application/json' })
    .then((res) => {
      expect(res.body.expenseName).toBe('food')
    })
})
