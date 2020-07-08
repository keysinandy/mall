
class Heap {

  constructor (comparePass) {
    this.comparePass = comparePass
    this.heapArray = []
  }

  leftIndex (index) {
    return index * 2 + 1
  }

  rightIndex (index) {
    return index * 2 + 2
  }

  parentIndex (index) {
    return Math.floor((index - 1) / 2)
  }

  left (index) {
    if (this.haveLeft(index)) {
      return this.heapArray[this.leftIndex(index)]
    } else {
      return null
    }
  }

  right (index) {
    if (this.haveRight(index)) {
      return this.heapArray[this.rightIndex(index)]
    } else {
      return null
    }
  }

  parent (index) {
    if (this.haveParent(index)) {
      return this.heapArray[this.parentIndex(index)]
    } else {
      return null
    }
  }

  haveLeft (index) {
    return this.leftIndex(index) < this.heapArray.length
  }

  haveRight (index) {
    return this.rightIndex(index) < this.heapArray.length
  }

  haveParent (index) {
    return this.parentIndex(index) >= 0
  }

  add (value) {
    this.heapArray.push(value)
    this.shiftUp()
    return this
  }

  //remove
  remove (value) {
    let valueIndexes = this.find(value)

    let len = valueIndexes.length
    for (let i = 0; i < len; i++) {
      let index = this.find(value).pop()

      if (index === this.heapArray.length - 1) {
        this.heapArray.pop()
      } else {
        this.heapArray[index] = this.heapArray.pop()
        if (
          this.haveParent(index) && this.comparePass(this.heapArray[index], this.parent(index))
          ) {
          this.shiftUp(index)
        } else {
          this.shiftDown(index)
        }
      }
    }
    return this
  }

  find (value) {
    let array = this.heapArray
    let indexArray = []
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (value === element) {
        indexArray.push(i)
      }
    }
    return indexArray
  }

  shiftUp (index) {
    index === undefined && (index = this.heapArray.length - 1)

    while (this.haveParent(index)) {

      if (this.comparePass(this.parent(index), this.heapArray[index])) {
        break;
      }
      this.swap(this.parentIndex(index), index)
      index = this.parentIndex(index)
    }

  }

  shiftDown (index) {
    index === undefined && (index = 0)
    while (this.haveLeft(index)) {
      let nextIndex = this.leftIndex(index)
      if (this.haveRight(index) && this.comparePass(this.right(index), this.left(index))) {
        nextIndex = this.rightIndex(index)
      }
      if (this.comparePass(this.heapArray[index], this.heapArray[nextIndex])) {
        break
      }
      this.swap(index, nextIndex)
      index = nextIndex
    }
  }

  swap (index1, index2) {
    [this.heapArray[index1], this.heapArray[index2]] = [this.heapArray[index2], this.heapArray[index1]]
  }

  isEmpty () {
    return !this.heapArray.length
  }

  peek () {
    return this.heapArray[0] || null
  }

  poll () {
    let len = this.heapArray.length
    if (len === 0) {
      return null
    }
    if (len === 1) {
      let value = this.heapArray.pop()
      return value
    }

    let value = this.heapArray[0]
    this.heapArray[0] = this.heapArray.pop()
    this.shiftDown()
    return value


  }
  toString () {
    return this.heapArray.join()
  }
}

export default Heap
