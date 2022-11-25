/*
Given the root of a binary tree, return its in-order traversal
in the form of an array.
*/

type TreeNode = {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

export const inorderTraversal = (root: TreeNode | null, result: number[] = []): number[] => {
  if (root !== null) {
    inorderTraversal(root.left, result)
    result.push(root.val)
    inorderTraversal(root.right, result)
  }
  return result
}

const args = process.argv.slice(2)
const root = JSON.parse(args[0])
const result = inorderTraversal(root)
console.log(result)
