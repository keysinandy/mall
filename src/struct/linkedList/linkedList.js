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

  delHead () {
    let deleteNode = null
    if (this.head) {
      let nextHead = this.head.next
      deleteNode = this.head
      this.head.next = null
      !(this.head = nextHead) && (this.tail = null);
    }
    return deleteNode
  }

  delTail () {
    let deleteNode = null
    if (this.tail) {
      let currentNode = this.head
      deleteNode = this.tail
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
      }
      while(currentNode && currentNode.next) {
        if (currentNode.next === this.tail) {
          currentNode.next = null;
          this.tail = currentNode
        }
        currentNode = currentNode.next
      }
    }
    return deleteNode
  }

  reverse () {
    let currentNode = this.head
    let prevNode = null
    let nextNode = null
    while (currentNode) {
      //对下一个节点的引用
      nextNode = currentNode.next
      //将当前节点的next指向上一个节点
      currentNode.next = prevNode
      //重新给prevNode赋值
      prevNode = currentNode
      currentNode = nextNode
    }
    //最后交换头尾
    [this.head, this.tail] = [this.tail, this.head]
    return this
  }

  toString(separate = "") {
    let current = this.head
    let result = ""
    while (current) {
      result += current === this.tail ? current.value : current.value + separate
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