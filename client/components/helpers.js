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
  let dollarSign = '$'
  if (isNaM) {
    dollarSign = ''
  }
  if (wholeNumber[0] === '-') {
    if (wholeNumber[1] === ',') {
      wholeNumber = wholeNumber.slice(0, 1) + dollarSign + wholeNumber.slice(2, wholeNumber.length)
    } else {
      wholeNumber = wholeNumber.slice(0, 1) + dollarSign + wholeNumber.slice(1, wholeNumber.length)
    }
  } else {
    wholeNumber = dollarSign + wholeNumber
  }

  if (isNaM) {
    return wholeNumber
  }
  return wholeNumber + '.' + decimals
}
