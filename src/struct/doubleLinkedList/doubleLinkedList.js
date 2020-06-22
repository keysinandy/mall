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

  delHead () {
    let deleteNode = null
    if (this.head) {
      let nextHead = this.head.next
      nextHead && (nextHead.prev = null)
      deleteNode = this.head
      deleteNode.next = null
      !(this.head = nextHead) && (this.tail = null)
    }
    return deleteNode
  }

  delTail () {
    let deleteNode = null
    if (this.tail) {
      let nextTail = this.tail.prev
      nextTail && (nextTail.next = null)
      deleteNode = this.tail
      deleteNode.prev = null
      !(this.tail = nextTail) && (this.head = null)
    }
    return deleteNode
  }

  reverse () {
    [this.head, this.tail] = [this.tail, this.head]
    return this
  }

}
export default DoubleLinkedList
