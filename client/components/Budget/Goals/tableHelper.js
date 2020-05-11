export function getAnnualContribution (daysNumber, budget) {
  const yearsRemaining = daysNumber / 365
  return (budget / yearsRemaining).toFixed(2)
}

export function getMonthlyContribution (daysNumber, budget) {
  const yearsRemaining = daysNumber / 365
  const monthsRemaining = yearsRemaining * 12
  return (budget / monthsRemaining).toFixed(2)
}

export function getWeeklyContribution (daysNumber, budget) {
  const weeksRemaining = daysNumber / 7
  return (budget / weeksRemaining).toFixed(2)
}
