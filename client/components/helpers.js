export const addCommas = (string, isNaM) => {
  if (typeof string === 'number' && !isFinite(string)) {
    return 'Infinite'
  }

  if (typeof string !== 'string') {
    string = String(string)
  }

  let decimals = string.split('.')[1]
  if (!isNaM) {
    if (decimals === undefined) {
      decimals = '00'
    }
  }

  let wholeNumber = string.split('.')[0]
  let count = 0
  for (let i = wholeNumber.length - 1; i > 0; i--) {
    if (count === 2) {
      wholeNumber = wholeNumber.slice(0, i) + ',' + wholeNumber.slice(i, wholeNumber.length)
      count = 0
    } else {
      count++
    }
  }

  if (isNaM) {
    return wholeNumber
  }
  return wholeNumber + '.' + decimals
}
