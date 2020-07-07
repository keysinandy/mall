import BinarySearchTreeNode from './BinarySearchTreeNode'

/**
 * 二叉搜索树
 */
class BinarySearchTree {
  constructor () {
    this.root = new BinarySearchTreeNode(null)
  }

  insert (value) {
    return this.root.insert(value)
  }

  remove (value) {
    return this.root.remove(value)
  }

  find (value) {
    return this.root.find(value)
  }

  contains (value) {
    return this.root.contains(value)
  }

  toString (separator = ',') {
    return this.root.toString(separator)
  }
  get height () {
    return this.root.height
  }

  get leftHeight () {
    return this.root.leftHeight
  }

  get rightHeight () {
    return this.root.rightHeight
  }

  get heightDiff () {
    return this.root.heightDiff
  }

}

export default BinarySearchTree
