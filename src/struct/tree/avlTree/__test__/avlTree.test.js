import AvlTree from '../AvlTree'

describe("测试avlTree", () => {
  it("测试平衡", () => {
    let tree = new AvlTree()
    tree.insert(0)
    tree.insert(19)
    tree.insert(22)
    tree.insert(13)
    expect(tree.heightDiff).toBeLessThanOrEqual(1)
    expect(tree.heightDiff).toBeGreaterThanOrEqual(-1)
    tree.remove(0)
    tree.remove(19)
    expect(tree.heightDiff).toBeLessThanOrEqual(1)
    expect(tree.heightDiff).toBeGreaterThanOrEqual(-1)
    tree.remove(110)
    tree.remove(119)
    expect(tree.heightDiff).toBeLessThanOrEqual(1)
    expect(tree.heightDiff).toBeGreaterThanOrEqual(-1)
  })
})
