const x = {
  auckland: 1000,
  wellington: 2000
}

const places = Object.keys(x)

const log = places.map((p) => `${p},${x[p]},${Math.round(x[p] / 12)}\n`)

console.log(log.join(''))
