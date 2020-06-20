import DoubleLinkedListNode from './doubleLinkedListNode'

class DoubleLinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  prepend (value) {
    let node = new DoubleLinkedListNode(value)
    if (this.head === null) {
      this.head = this.tail = node
      return this
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
      return this
    }
  }

  append (value) {
    let node = new DoubleLinkedListNode(value);
    if (this.tail === null) {
      this.tail = this.head = node
      return this
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      return this
    }
  }
  
  reverse () {
    [this.head, this.tail] = [this.tail, this.head]
    return this
  }

}
export default DoubleLinkedList
