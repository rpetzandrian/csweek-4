const sorting = require('./sorting')
class knapsack extends sorting {
  constructor(data) {
    super(data)
  }

  loopknap(data, maxweight) {
    let result = []
    let price = 0;
    let rest = maxweight
    for (let i = 0; i < data.length; i++) {
      if (rest < data[i].weight) {
        rest = rest
      } else {
        rest -= data[i].weight
        price += data[i].price
        result.push(data[i])
        if (rest === 0) {
          return { result, price }
        }
      }
    }
    return { result, price }
  }

  knap(maxweight) {
    let result = []
    let price = 0

    let temp1 = this.loopknap(this.sortByWeight('asc'), maxweight)
    if (temp1.price > price) {
      result = temp1.result
      price = temp1.price
    }
    let temp2 = this.loopknap(this.sortByWeight('desc'), maxweight)
    if (temp2.price > price) {
      result = temp2.result
      price = temp2.price
    }
    let temp3 = this.loopknap(this.sortByPrice('asc'), maxweight)
    if (temp3.price > price) {
      result = temp3.result
      price = temp3.price
    }
    let temp4 = this.loopknap(this.sortByPrice('desc'), maxweight)
    if (temp4.price > price) {
      result = temp4.result
      price = temp4.price
    }

    return { result, price }
  }
}

module.exports = knapsack