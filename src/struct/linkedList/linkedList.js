import LinkedListNode from './linkedListNode'
class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  prepend (value) {
    let node = new LinkedListNode(value, this.head)
    this.head = node
    !this.tail && (this.tail = node)
    return this
  }

  append (value) {
    let node = new LinkedListNode(value, null)
    if (!this.head) {
      this.tail = this.head = node
      return this
    }
    this.tail.next = node
    this.tail = node
    return this
  }

  toString() {
    let current = this.head
    let result = ""
    while (current) {
      result += current === this.tail ? current.value : current.value + " --> "
      current = current.next
    }
    return result
  }

  toArray () {
    let current = this.head
    let result = []
    while (current) {
      result.push(current.value)
      current = current.next
    }
    return result
  }

  static fromArray (array) {
    if (Array.isArray(array)) {
      let linkedList = new LinkedList()
      for (let i = 0; i < array.length; i++) {
        linkedList.append(array[i]);
      }
      return linkedList
    } else {
      throw new Error(`${array} is not array`)
    }
  }
}

export default LinkedList