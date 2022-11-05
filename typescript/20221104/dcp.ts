/*
Given two binary trees, determine if they are identical in structure and values.
*/

type TreeNode = {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (p === null && q === null) return true
  if (p === null || q === null) return false
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

const args = process.argv.slice(2)
const tree1 = JSON.parse(args[0])
const tree2 = JSON.parse(args[1])
const result = isSameTree(tree1, tree2)
console.log(result)
