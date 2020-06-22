import TreeNode from '../TreeNode'

class BinarySearchTreeNode extends TreeNode {

  /**
   * 插入一个值到搜索树中
   * @param {*} value
   * @returns {BinarySearchTreeNode || null}
   */
  insert (value) {
    if (this.node.value == null) {
      //初始化树
      this.value = value
      return this
    }

    if (value < this.node.value) {
      if (this.left) {
        this.left.insert(value)
      } else {
        let node = new BinarySearchTreeNode(value);
        this.setLeft(node)
      }
      return this
    }

    if (value > this.node.value) {
      if (this.right) {
        this.right.insert(value)
      } else {
        let node = new BinarySearchTreeNode(value);
        this.setRight(node)
      }
      return this
    }
  }

  /**
   * TODO:在搜索树删除一个值
   * @param {*} value
   * @returns {BinarySearchTreeNode || null}
   */
  remove (value) {
    let node = this.find(value)
    if (!node) {
      //无这个值则返回null
      return null
    }

    if (node.left === null && node.right === null) {
      if (node.parent) {
        // node.parent.left ===
        // node.parent = null;

      }
    }
  }

  /**
   * 在搜索树查找一个值
   * @param {*} value
   * @returns {BinarySearchTreeNode || null}
   */
  find (value) {
    if (this.value === value) {
      return this
    }

    if (this.value === null) {
      return null
    }

    if (value < this.value) {
      return this.left.find(value)
    }

    if (value > this.value) {
      return this.right.find(value)
    }
  }
  /**
   * 检查某个值是否在搜索树中
   * @param {*} value
   * @returns {Boolean}
   */
  contains (value) {
    return this.find(value) ? true : false
  }

  /**
   * 打印搜索树
   * @returns {String}
   */
  toString () {

  }
}
export default BinarySearchTreeNode
