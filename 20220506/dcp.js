/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. 
A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
*/

const args = process.argv.slice(2)

let tree = JSON.parse(args[0])
let subtree = JSON.parse(args[1])

console.log(isSubtree(tree, subtree))

function hasChild(node) {
    return node.left || node.right
}

// recursively traverse both trees and check if all node values and structure is equal
function treesEqual(root1, root2) {
    if (root1 && root2) {
        if (root1.value == root2.value) {
            if (hasChild(root1) && hasChild(root2)) {
                return treesEqual(root1.left, root2.left) && treesEqual(root1.right, root2.right)
            } else if (!hasChild(root1) && !hasChild(root2)) return true 
        }
    } else if (!root1 && !root2) return true
    return false
}

// recursively traverse tree and check each node against given subtree
function isSubtree(tree, subtree) {
    if (tree == null) return false
    else if (tree.value == subtree.value) return treesEqual(tree, subtree)
    else return isSubtree(tree.left, subtree) || isSubtree(tree.right, subtree)
}