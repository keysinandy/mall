import LinkedList from '../linkedList/linkedList'

class Queue {
  constructor () {
    this.list = new LinkedList()
  }

  isEmpty () {
    return !this.list.head
  }

  peak () {
    let value = this.list.head ? this.list.head.value : null
    return value
  }

  dequeue () {
    //删除头部
    let node = this.list.delHead()
    return (node && node.value)
  }

  enqueue (value) {
    //添加到尾部
    return this.list.append(value)
  }

  toArray () {
    return this.list.toArray()
  }

  toString (separate = "") {
    return this.list.toString(separate)
  }
}

export default Queue
