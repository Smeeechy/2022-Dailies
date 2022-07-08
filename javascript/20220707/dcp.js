/*
Write a method each for in-order, pre-order, and post-order binary tree traversal.
*/

const inOrderTraverse = (tree, array) => {
  if (!tree) return
  inOrderTraverse(tree.left, array)
  array.push(tree.value)
  inOrderTraverse(tree.right, array)
  return array
}

const preOrderTraverse = (tree, array) => {
  if (!tree) return
  array.push(tree.value)
  preOrderTraverse(tree.left, array)
  preOrderTraverse(tree.right, array)
  return array
}

const postOrderTraverse = (tree, array) => {
  if (!tree) return
  postOrderTraverse(tree.left, array)
  postOrderTraverse(tree.right, array)
  array.push(tree.value)
  return array
}

const args = process.argv.slice(2)
const tree = JSON.parse(args[0])
const preOrder = preOrderTraverse(tree, [])
const inOrder = inOrderTraverse(tree, [])
const postOrder = postOrderTraverse(tree, [])
console.log(preOrder)
console.log(inOrder)
console.log(postOrder)