import { getWeeklyContribution, getMonthlyContribution, getAnnualContribution } from './tableHelper'

test('getWeeklyContribution returns the correct result', () => {
  const daysNumber = 35
  const currentAmount = 200
  const budget = 12000
  const result = getWeeklyContribution(daysNumber, currentAmount, budget)
  expect(result).toBe('2360.00')
})

test('getMonthlyContribution returns the correct result', () => {
  const daysNumber = 365
  const currentAmount = 200
  const budget = 12000
  const result = getMonthlyContribution(daysNumber, currentAmount, budget)
  expect(result).toBe(983.33)
})

test('getAnnualContribution returns the correct result', () => {
  const daysNumber = 2920
  const currentAmount = 200
  const budget = 12000
  const result = getAnnualContribution(daysNumber, currentAmount, budget)
  expect(result).toBe(1475)
})
