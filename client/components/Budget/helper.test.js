import h from './helper'

test('cta returns the correct number if specified as weekly', () => {
  const freq = 'Weekly'
  const amount = 100
  const result = h.cta(freq, amount)
  expect(result).toBe(5200)
})

test('cta returns the correct number if specified as monthly', () => {
  const freq = 'Monthly'
  const amount = 100
  const result = h.cta(freq, amount)
  expect(result).toBe(1200)
})

test('cta returns the correct number if specified as annually', () => {
  const freq = 'Annually'
  const amount = 100
  const result = h.cta(freq, amount)
  expect(result).toBe(100)
})

test('ctm returns a number that has been divided by 12', () => {
  const amount = 60
  const result = h.ctm(amount)
  expect(result).toBe(5)
})

test('ctw returns a number that has been divided by 52', () => {
  const amount = 2392
  const result = h.ctw(amount)
  expect(result).toBe(46)
})
