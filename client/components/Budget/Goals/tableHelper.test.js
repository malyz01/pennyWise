import { getWeeklyContribution, getMonthlyContribution, getAnnualContribution } from './tableHelper'

test('getWeeklyContribution returns the correct result', () => {
  const daysNumber = 35
  const currentAmount = 200
  const budget = 12000
  const result = getWeeklyContribution(daysNumber, currentAmount, budget)
  expect(result).toBe(2360)
})
