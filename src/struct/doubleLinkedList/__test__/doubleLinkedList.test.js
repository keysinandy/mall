import DoubleLinkedList from '../doubleLinkedList'

describe("test doubleLinkedList", () => {
  it("test init list", () => {
    let list = new DoubleLinkedList()
    expect(list.head).toBeNull()
    expect(list.head).toBeNull()
  })

  it("test prepend", () => {
    let list = new DoubleLinkedList()
    list.prepend("second")
    expect(list.head.value).toBe("second")
    expect(list.tail.value).toBe("second")
    expect(list.tail).toEqual(list.head)
    expect(list.head.prev).toBeNull()
    expect(list.tail.next).toBeNull()
    list.prepend("first")
    expect(list.head.value).toBe("first")
    expect(list.tail.value).toBe("second")
    expect(list.head.next).toEqual(list.tail)
    expect(list.tail.prev).toEqual(list.head)
    expect(list.head.prev).toBeNull()
    expect(list.tail.next).toBeNull()
  })

  it("test append", () => {
    let list = new DoubleLinkedList()
    list.append("first")
    expect(list.head.value).toBe("first")
    expect(list.tail.value).toBe("first")
    expect(list.tail).toEqual(list.head)
    expect(list.head.prev).toBeNull()
    expect(list.tail.next).toBeNull()
    list.append("second")
    expect(list.head.value).toBe("first")
    expect(list.tail.value).toBe("second")
    expect(list.head.next).toEqual(list.tail)
    expect(list.tail.prev).toEqual(list.head)
    expect(list.head.prev).toBeNull()
    expect(list.tail.next).toBeNull()
  })
})