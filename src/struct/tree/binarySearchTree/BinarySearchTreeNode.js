import TreeNode from '../TreeNode'

class BinarySearchTreeNode extends TreeNode {

  /**
   * 插入一个值到搜索树中
   * @param {*} value
   * @returns {BinarySearchTreeNode || null}
   */
  insert (value) {
    if (this.value == null) {
      //初始化树
      this.value = value
      return this
    }

    if (value < this.value) {
      if (this.left) {
        this.left.insert(value)
      } else {
        let node = new BinarySearchTreeNode(value);
        this.setLeft(node)
      }
      return this
    }

    if (value > this.value) {
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
   * @returns {Boolean}
   */
  remove (value) {
    let node = this.find(value)
    if (!node) {
      //无这个值则返回null
      return false
    }

    if (node.left === null && node.right === null) {
      //无左右子树
      node.parent ? node.parent.removeChild(node) : node.value = null
    } else if (node.left && node.right) {
      //左右子树都有
      //找到右子树中最小的一个节点，将其放在被删除的节点上
      let minNode = node.right.findMin()
      if (minNode === node.right) {
        node.setValue(minNode.value)
        node.setRight(minNode.right)
      } else {
        //递归节点
        node.remove(minNode.value)
        node.setValue(minNode.value)
      }
    } else {
      //只有一颗子树
      let newNode = node.left ? node.left : node.right
      node.parent ? node.parent.replaceChild(node, newNode) : this.replaceSelf(newNode)
    }
    return true
  }

  /**
   * 查找一个节点下最小的节点
   */
  findMin () {
    if (this.left) {
      return this.left.findMin()
    } else {
      return this
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
      if (this.left) {
        return this.left.find(value)
      }
      return null
    }

    if (value > this.value) {
      if (this.right) {
        return this.right.find(value)
      }
      return null
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
  toString (separator = ',') {
    return this.traverseInOrder().join(separator)
  }
}
export default BinarySearchTreeNode
