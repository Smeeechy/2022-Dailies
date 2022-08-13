/*
Given a binary tree, find its diameter.
A binary tree's diameter is defined as the longest path between two nodes. 
This path does not need to include the root node.
*/

const binaryTreeDiameter = tree => {
  return findDiameterRecursive(tree)[0]
}

const findDiameterRecursive = tree => {
  if (!tree) return [0, 0]
  const [leftDiameter, leftHeight] = findDiameterRecursive(tree.left)
  const [rightDiameter, rightHeight] = findDiameterRecursive(tree.right)
  const diameter = Math.max(leftDiameter, rightDiameter, leftHeight + rightHeight)
  const height = Math.max(leftHeight, rightHeight) + 1
  return [diameter, height]
}

const args = process.argv.slice(2)
const tree = JSON.parse(args[0])
const result = binaryTreeDiameter(tree)
console.log(result)