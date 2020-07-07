class TreeNode {
  constructor (value = null) {
    this.parent = null
    this.left = null
    this.right = null
    this.value = value
  }

  get height () {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  get leftHeight () {
    //递归栈太多？
    if (this.left === null) {
      return 0
    } else {
      return this.left.height + 1
    }
  }

  get rightHeight () {
    if (this.right === null) {
      return 0
    } else {
      return this.right.height + 1
    }
  }

  get heightDiff () {
    return this.leftHeight - this.rightHeight
  }

  setValue (value) {
    this.value = value
  }

  /**
   *
   * @param {TreeNode} treeNode
   */
  setLeft (treeNode) {
    this.left && (this.left.parent = null)
    this.left = treeNode
    treeNode && (treeNode.parent = this)
    return this
  }

  /**
   *
   * @param {TreeNode} treeNode
   */
  setRight (treeNode) {
    this.right && (this.right.parent = null)
    this.right = treeNode
    treeNode && (treeNode.parent = this)
    return this
  }

  /**
   * 移除子树
   * @param {TreeNode} treeNode
   */
  removeChild (treeNode) {
    if (this.right === treeNode) {
      this.right.parent = null
      this.right = null
    } else if (this.left === treeNode) {
      this.left.parent = null
      this.left = null
    } else {
      return false
    }
    return true
  }

  /**
   * 将某个子节点替换为新的节点
   * @param {*} childNode
   * @param {*} newNode
   */
  replaceChild (childNode, newNode) {
    if (this.right === childNode) {
      this.right.parent = null
      this.right = newNode
      newNode.parent = this
    } else if (this.left === childNode) {
      this.left.parent = null
      this.left = newNode
      newNode.parent = this
    } else {
      return false
    }
    return true
  }

  /**
   * 将自身替换为新节点
   * @param {*} newNode
   */
  replaceSelf (newNode) {
    this.value = newNode.value
    this.left = newNode.left
    this.right = newNode.right
  }
  //先序
  traversePreOrder () {
    let traverse = [];

    traverse.push(this.value)

    this.left && (traverse = traverse.concat(this.left.traversePreOrder()))

    this.right && (traverse = traverse.concat(this.right.traversePreOrder()))
    return traverse
  }

  //中序
  traverseInOrder () {
    let traverse = []

    this.left && (traverse = traverse.concat(this.left.traverseInOrder()))

    traverse.push(this.value)

    this.right && (traverse = traverse.concat(this.right.traverseInOrder()))

    return traverse;
  }

  //后序
  traversePostOrder () {
    let traverse = [];

    this.left && (traverse = traverse.concat(this.left.traversePostOrder()))

    this.right && (traverse = traverse.concat(this.right.traversePostOrder()))

    traverse.push(this.value)

    return traverse
  }
}

export default TreeNode
