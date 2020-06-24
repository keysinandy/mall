import TreeNode from '../TreeNode'

describe("测试 treeNode", () => {
  it("测试 setLeft", () => {
    const root = new TreeNode(1)
    const leftNode = new TreeNode(0)
    root.setLeft(leftNode)

    expect(leftNode.parent).toEqual(root)
    expect(root.left).toEqual(leftNode)
  })

  it("测试 setRight", () => {
    const root = new TreeNode(1)
    const rightNode = new TreeNode(0)
    root.setRight(rightNode)

    expect(rightNode.parent).toEqual(root)
    expect(root.right).toEqual(rightNode)
  })

  it("测试 setValue", () => {
    const root = new TreeNode(1)
    root.setValue(9)
    expect(root.value).toBe(9)
  })

  it("测试 height", () => {
    const root = new TreeNode(1)
    expect(root.height).toBe(0)
    let one = new TreeNode(1)
    let two = new TreeNode(2)
    let three = new TreeNode(3)
    let four = new TreeNode(4)
    let five = new TreeNode(5)
    root.setLeft(one)
    one.setRight(two)
    two.setRight(three)
    root.setRight(four)
    four.setLeft(five)
    expect(root.heightDiff).toBe(-1)
    expect(root.leftHeight).toBe(3)
    expect(root.rightHeight).toBe(2)
    expect(root.height).toBe(3)
  })

  it("测试 遍历", () => {
    const root = new TreeNode(0)
    let one = new TreeNode(1)
    let two = new TreeNode(2)
    let three = new TreeNode(3)
    let four = new TreeNode(4)
    let five = new TreeNode(5)
    let six = new TreeNode(6)
    let seven = new TreeNode(7)
    let eight = new TreeNode(8)
    root.setLeft(one)
    one.setRight(two)
    two.setLeft(three)
    two.setRight(four)
    root.setRight(five)
    five.setLeft(six)
    five.setRight(seven)
    six.setRight(eight)

    expect(root.traversePreOrder()).toEqual([0,1,2,3,4,5,6,8,7])
    expect(root.traverseInOrder()).toEqual([1,3,2,4,0,6,8,5,7])
    expect(root.traversePostOrder()).toEqual([3,4,2,1,8,6,7,5,0])
  })

  it("测试 removeChild", () => {
    const root = new TreeNode(0)
    const left = new TreeNode(1)
    const right = new TreeNode(2)
    const unknown = new TreeNode('unknown')
    root.setLeft(left)
    root.setRight(right)

    expect(root.removeChild(unknown)).toBe(false)
    expect(root.removeChild(left)).toBe(true)
    expect(root.left).toBeNull()
    expect(root.removeChild(right)).toBe(true)
    expect(root.right).toBeNull()
  })

  it("测试 replaceChild", () => {
    const root = new TreeNode(0)
    const left = new TreeNode(1)
    const right = new TreeNode(2)
    const newNode = new TreeNode('newNode')
    root.setLeft(left)
    root.setRight(right)
    expect(root.replaceChild(newNode, newNode)).toBe(false)
    expect(root.replaceChild(left, newNode)).toBe(true)
    expect(root.left).toEqual(newNode)
  })

  it("测试 replaceSelf", () => {
    const root = new TreeNode(0)
    const newNode = new TreeNode('newNode')
    root.replaceSelf(newNode)
    expect(root).toEqual(newNode)
    const left = new TreeNode(1)
    const right = new TreeNode(2)
    const specialNode = new TreeNode(10)
    root.setLeft(left)
    root.setRight(right)
    left.replaceSelf(specialNode)
    expect(root.left.value).toEqual(specialNode.value)
    expect(root.left.left).toEqual(specialNode.left)
    expect(root.left.right).toEqual(specialNode.right)
  })
})
