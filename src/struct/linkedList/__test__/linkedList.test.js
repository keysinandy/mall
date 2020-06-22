import LinkedList from '../linkedList'

describe("测试linkedList", () => {
  it("测试append", () => {
    const linkedList = new LinkedList()
    linkedList.append("first").append("second")
    expect(linkedList.head.value).toBe("first")
    expect(linkedList.tail.value).toBe("second")
    expect(linkedList.head.next).toBe(linkedList.tail)
    expect(linkedList.tail.next).toBeNull()
  })

  it("测试prepend", () => {
    const linkedList = new LinkedList()
    linkedList.prepend("second").prepend("first")
    expect(linkedList.head.value).toBe("first")
    expect(linkedList.tail.value).toBe("second")
    expect(linkedList.head.next).toBe(linkedList.tail)
    expect(linkedList.tail.next).toBeNull()
  })

  it("测试delHead", () => {
    const linkedList = new LinkedList()
    let firstNode = linkedList.append("first").append("second").delHead()
    expect(linkedList.head.value).toBe("second")
    expect(linkedList.tail.value).toBe("second")
    expect(linkedList.head.next).toBeNull()
    expect(linkedList.tail.next).toBeNull()
    expect(firstNode.value).toBe("first")
    expect(firstNode.next).toBeNull()
    let secondNode = linkedList.delHead()
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
    expect(secondNode.value).toBe("second")
    expect(secondNode.next).toBeNull()
  })

  it("测试delTail", () => {
    const linkedList = new LinkedList()
    let firstNode = linkedList.append("first").append("second").delTail()
    expect(linkedList.head.value).toBe("first")
    expect(linkedList.tail.value).toBe("first")
    expect(linkedList.head.next).toBeNull()
    expect(linkedList.tail.next).toBeNull()
    expect(firstNode.value).toBe("second")
    expect(firstNode.next).toBeNull()
    let secondNode = linkedList.delTail()
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
    expect(secondNode.value).toBe("first")
    expect(secondNode.next).toBeNull()
  })

  it("测试reverse", () => {
    const linkedList = new LinkedList()
    linkedList.append("first").append("second").append("third")
    expect(linkedList.toString()).toBe("first-->second-->third")
    expect(linkedList.reverse().toString()).toBe("third-->second-->first")
  })

  it("测试toString", () => {
    const linkedList = new LinkedList()
    linkedList.prepend("second").prepend("first")
    expect(linkedList.toString()).toBe("first-->second")
  })

  it("测试toArray", () => {
    const linkedList = new LinkedList()
    linkedList.prepend("second").prepend("first")
    expect(linkedList.toArray()).toEqual(['first', 'second'])
  })

  it("测试fromArray", () => {
    const linkedList = LinkedList.fromArray(['first', 'second'])
    expect(linkedList.toArray()).toEqual(['first', 'second'])
  })
})