import LinkedList from '../linkedList'

describe("测试linkedList", () => {
  test("测试append", () => {
    const linkedList = new LinkedList()
    linkedList.append("first").append("second")
    expect(linkedList.head.value).toBe("first")
    expect(linkedList.tail.value).toBe("second")
    expect(linkedList.head.next).toBe(linkedList.tail);
    expect(linkedList.tail.next).toBeNull()
  })

  test("测试prepend", () => {
    const linkedList = new LinkedList()
    linkedList.prepend("second").prepend("first")
    expect(linkedList.head.value).toBe("first")
    expect(linkedList.tail.value).toBe("second")
    expect(linkedList.head.next).toBe(linkedList.tail);
    expect(linkedList.tail.next).toBeNull()
  })

  test("测试reverse", () => {
    const linkedList = new LinkedList()
    linkedList.append("first").append("second").append("third")
    expect(linkedList.toString()).toBe("first-->second-->third")
    expect(linkedList.reverse().toString()).toBe("third-->second-->first")
  })

  test("测试toString", () => {
    const linkedList = new LinkedList()
    linkedList.prepend("second").prepend("first")
    expect(linkedList.toString()).toBe("first-->second")
  })

  test("测试toArray", () => {
    const linkedList = new LinkedList()
    linkedList.prepend("second").prepend("first")
    expect(linkedList.toArray()).toEqual(['first', 'second'])
  })

  test("测试fromArray", () => {
    const linkedList = LinkedList.fromArray(['first', 'second'])
    expect(linkedList.toArray()).toEqual(['first', 'second'])
  })
})