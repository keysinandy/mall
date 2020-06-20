import DoubleLinkedList from '../doubleLinkedListNode'

describe("test doubleLinkedList node", () => {
  it ("test value", () => {
    const node = new DoubleLinkedList("value")
    expect(node.value).toBe("value")
    expect(node.prev).toBeNull()
    expect(node.next).toBeNull()
  })
})