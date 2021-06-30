const sorting = require('./sorting')

class schedule extends sorting {
  constructor(data) {
    super(data)
  }

  loopSchedule(data) {
    let result = []
    let arr = data.arr
    if (data.type === 'asc') {
      for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i].start >= result[result.length - 1].end) {
          result.push(arr[i])
        }
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i].end <= result[result.length - 1].start) {
          result.push(arr[i])
        }
      }
    }
    return result
  }

  getSchedule() {
    let result = []

    let temp1 = this.loopSchedule(this.sortByEnd('asc'))
    temp1.length > result.length ? result = temp1 : null
    let temp2 = this.loopSchedule(this.sortByEnd('desc'))
    temp2.length > result.length ? result = temp2 : null
    let temp3 = this.loopSchedule(this.sortByStart('asc'))
    temp3.length > result.length ? result = temp3 : null
    let temp4 = this.loopSchedule(this.sortByStart('desc'))
    temp4.length > result.length ? result = temp4 : null

    return result
  }
}

module.exports = schedule