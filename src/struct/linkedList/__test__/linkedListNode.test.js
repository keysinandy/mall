import LinkedListNode from '../linkedListNode'

describe("测试linkedListNode", () => {
  test("测试单个节点", () => {
    const node = new LinkedListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  test("测试两个节点", () => {
    const firstNode = new LinkedListNode(1);
    const secondNode = new LinkedListNode(2,firstNode);
    expect(firstNode.value).toBe(1);
    expect(firstNode.next).toBeNull();
    expect(secondNode.value).toBe(2);
    expect(secondNode.next).toBe(firstNode);
  });
})