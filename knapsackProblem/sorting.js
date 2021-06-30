class sorting {
  constructor(data) {
    this.data = data
  }

  sortByWeight(type) {
    let arr = this.data
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (type === 'asc') {
          if (arr[j + 1].weight > arr[j].weight) break;
        }
        if (type === 'desc') {
          if (arr[j + 1].weight < arr[j].weight) break;
        }
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
    return arr
  }

  sortByPrice(type) {
    let arr = this.data
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (type === 'asc') {
          if (arr[j + 1].price > arr[j].price) break;
        }
        if (type === 'desc') {
          if (arr[j + 1].price < arr[j].price) break;
        }
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
    return arr
  }
}

module.exports = sorting