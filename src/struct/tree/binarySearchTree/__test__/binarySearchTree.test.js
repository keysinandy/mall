import BinarySearchTree from '../BinarySearchTree'

describe("测试 binarySearchTree", () => {
  it("测试insert", () => {
    const root = new BinarySearchTree()
    root.insert(0).insert(1).insert(-1).insert(0.5)
    expect(root.toString()).toBe("-1,0,0.5,1")
  })

  it("测试find", () => {
    const root = new BinarySearchTree()
    root.insert(0)
    root.insert(1)
    root.insert(-1)
    root.insert(0.5)
    root.find(0)
    expect(root.find(2)).toBeNull()
  })

  it("测试contains", () => {
    const root = new BinarySearchTree()
    root.insert(0)
    root.insert(1)
    root.insert(-1)
    root.insert(0.5)
    expect(root.contains(0)).toBe(true)
    expect(root.contains(1)).toBe(true)
    expect(root.contains(0.5)).toBe(true)
    expect(root.contains(-1)).toBe(true)
    expect(root.contains(2)).toBe(false)
  })

  it("测试toString", () => {
    const root = new BinarySearchTree()
    expect(root.toString()).toBe("")
    root.insert(0)
    root.insert(1)
    root.insert(-1)
    root.insert(0.5)
    expect(root.toString()).toBe("-1,0,0.5,1")
  })

  it("测试remove", () => {
    const root = new BinarySearchTree()
    root.insert(0)
    root.insert(1)
    root.insert(-1)
    root.insert(0.5)
    root.insert(2)
    expect(root.toString()).toBe("-1,0,0.5,1,2")
    root.remove(1)
    expect(root.toString()).toBe("-1,0,0.5,2")
    root.remove(0)
    expect(root.toString()).toBe("-1,0.5,2")
    root.remove(-1)
    expect(root.toString()).toBe("0.5,2")
    root.remove(2)
    expect(root.toString()).toBe("0.5")
    root.remove(0.5)
    expect(root.toString()).toBe("")
  })

  it("测试height", () => {
    const root = new BinarySearchTree()
    root.insert(0)
    root.insert(1)
    root.insert(-1)
    root.insert(0.5)
    root.insert(2)
    expect(root.height).toBe(2)
    expect(root.leftHeight).toBe(1)
    expect(root.rightHeight).toBe(2)
  })
})
