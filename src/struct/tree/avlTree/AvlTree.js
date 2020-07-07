import BinarySearchTree from '../binarySearchTree/BinarySearchTree'
/**
 * 二叉平衡树
 */
class AvlTree extends BinarySearchTree{


  insert (value) {
    this.root.insert(value)
    let currentNode = this.root.find(value);
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }
  }

  remove (value) {
    this.root.remove(value)
    this.balance(this.root)
  }

  balance (node) {
    if (node.heightDiff > 1) {
      //左分支高，失衡
      this.balanceLeft(node)
    }
    if (node.heightDiff < -1) {
      this.balanceRight(node)
    }
  }

  balanceRight (node) {
    let rightNode = node.right
    if (rightNode.heightDiff > 0) {
      this.balanceRightLeft(node)
    }
    if (rightNode.heightDiff < 0) {
      this.balanceRightRight(node)
    }
  }

  balanceLeft (node) {
    let leftNode = node.left
    if (leftNode.heightDiff > 0) {
      this.balanceLeftLeft(node)
    }
    if (leftNode.heightDiff < 0) {
      this.balanceLeftRight(node)
    }
  }

  balanceRightRight (node) {
    let rootNode = node
    let rightNode = rootNode.right
    rootNode.setRight(null);
    if (rootNode.parent) {
      if (rootNode.parent.right === rootNode) {
        rootNode.parent.setRight(rightNode)
      } else {
        rootNode.parent.setLeft(rightNode)
      }
    } else {
      this.root = rightNode
    }

    if (rightNode.left) {
      rootNode.setRight(rightNode.left)
    }
    rightNode.setLeft(rootNode)
  }

  balanceRightLeft (node) {
    let rootNode = node
    let rightNode = rootNode.right
    let rightLeftNode = rightNode.left
    if (rightLeftNode.right) {
      rightNode.setLeft(rightLeftNode.right)
    }
    rootNode.setRight(rightLeftNode)
    rightLeftNode.setRight(rightNode)
    this.balanceRightRight(rootNode)
  }

  balanceLeftLeft (node) {
    let rootNode = node
    let leftNode = rootNode.left
    rootNode.setLeft(null)
    if (rootNode.parent) {
      if (rootNode.parent.left === rootNode) {
        rootNode.parent.setLeft(leftNode)
      } else {
        rootNode.parent.setRight(leftNode)
      }
    } else {
      this.root = leftNode
    }
    if (leftNode.right) {
      rootNode.setLeft(leftNode.right)
    }
    leftNode.setRight(rootNode)
  }

  balanceLeftRight (node) {
    let rootNode = node
    let leftNode = rootNode.left
    let leftRightNode = leftNode.right
    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left)
    }
    rootNode.setLeft(leftRightNode)
    leftRightNode.setLeft(leftNode)
    this.balanceLeftLeft(rootNode)
  }
}

export default AvlTree
