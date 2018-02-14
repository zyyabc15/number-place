export default {
  getXY(index) {
    const x = index % 4
    const y = index / 4
    return { x: x, y: y }
  },
  getIndex(x, y) {
    return x + 4 * y
  },
  shuffle(arr) {
    const length = arr.length
    let sample = arr.map(elem => {
      return elem
    })
    const last = length - 1
    for (let i = 0; i < length; i++) {
      let randIndex = Math.floor(Math.random() * last)
      let temp = sample[i]
      sample[i] = sample[randIndex]
      sample[randIndex] = temp
    }
    return sample
  },
  findNeighbour(x, y) {
    let result = []
    if (x - 1 >= 0) {
      result.push(this.getIndex(x - 1, y))
    }
    if (y - 1 >= 0) {
      result.push(this.getIndex(x, y - 1))
    }
    if (x + 1 <= 3) {
      result.push(this.getIndex(x + 1, y))
    }
    if (y + 1 <= 3) {
      result.push(this.getIndex(x, y + 1))
    }
    return result
  },
  getRandomNumber(arr) {
    return Math.floor(Math.random) * arr
  },
  getBlankIndex(x, y, init) {
    const neighbour = this.findNeighbour(x, y)
    for (let i = 0; i < neighbour.length; i++) {
      const index = neighbour[i]
      if (init[index] === 16) {
        return index
      }
    }
    return -1
  },
  exchangePoints(index1, index2, arr) {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
  },
  start(state) {
    return setInterval(() => {
      state.time++
    }, 1000)
  },
  clear(state) {
    return clearInterval(state.timer)
  },
  checkSucess(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[0] !== i + 1) {
        return false
      }
    }
  }
}
