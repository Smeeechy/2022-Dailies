/*
Given three nodes of the same binary tree, determine whether or not the first and 
third are an ancestor and descendant respectively of the second, or vice versa.
If so, return true, otherwise return false.
*/

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  // this class and method makes the overall solution nice and clean
  isAncestorOf(node) {
    let current = this
    while (true) {
      if (current === null) return false
      if (current.value === node.value) return true
      current = node.value < current.value ? current.left : current.right
    }
  }
}

const validateThreeNodes = (nodeOne, nodeTwo, nodeThree) => {
  if (nodeTwo.isAncestorOf(nodeOne)) {
    return nodeThree.isAncestorOf(nodeTwo)
  } else if (nodeTwo.isAncestorOf(nodeThree)) {
    return nodeOne.isAncestorOf(nodeTwo)
  } else return false
}

const args = process.argv.slice(2)
const nodeOne = JSON.parse(args[0])
const nodeTwo = JSON.parse(args[1])
const nodeThree = JSON.parse(args[2])
const result = validateThreeNodes(nodeOne, nodeTwo, nodeThree)
return result