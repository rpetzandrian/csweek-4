const knapsack = require('./knapsackProblem')

const data = [
  {
    name: 'ABC',
    weight: 2,
    price: 2600000
  },
  {
    name: 'DEF',
    weight: 3,
    price: 2600000
  },
  {
    name: 'GHI',
    weight: 2,
    price: 2450000
  },
  {
    name: 'JKL',
    weight: 4,
    price: 4800000
  },
  {
    name: 'MNO',
    weight: 5,
    price: 5100000
  }
]

const knap = new knapsack(data)
let hasil = knap.knap(7)
console.log(hasil)