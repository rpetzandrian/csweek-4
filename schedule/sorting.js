class sorting {
  constructor(data) {
    this.data = data
  }

  sortByStart(type) {
    let arr = this.data
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (type === 'asc') {
          if (arr[j + 1].start >= arr[j].start) break;
        }
        if (type === 'desc') {
          if (arr[j + 1].start <= arr[j].start) break;
        }
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
    return { arr, type }
  }

  sortByEnd(type) {
    let arr = this.data
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (type === 'asc') {
          if (arr[j + 1].end >= arr[j].end) break;
        }
        if (type === 'desc') {
          if (arr[j + 1].end <= arr[j].end) break;
        }
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
    return { arr, type }
  }
}

module.exports = sorting