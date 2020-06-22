import LinkedList from '../linkedList/linkedList'

class Stack {
  constructor () {
    this.list = new LinkedList()
  }

  isEmpty () {
    return !this.list.head
  }

  peak () {
    return this.list.head ? this.list.head.value : null
  }

  pop () {
    let node = this.list.delHead()
    return node && node.value
  }

  push (value) {
    this.list.prepend(value)
    return value
  }

  toArray () {
    return this.list.toArray()
  }

  toString (separate = "") {
    return this.list.toString(separate)
  }
  
}

export default Stack