/*
Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) and traverses it iteratively using the in-order tree-traversal technique; the traversal should specifically *not* use recursion.

As the tree is traversed, a given callback function should be called on each node.
*/

const iterativeInOrderTraversal = (tree, callback) => {
    let current = tree
    let next

    // assigning current and next before beginning iteration
    while (current.left) current = current.left
    if (current.right) {
        next = current.right
        while (next.left) next = next.left
    } else next = current.parent

    // iterative in-order traversal
    const visited = []
    while (true) {
        callback(current)
        visited.push(current)
        if (next == null) break
        prev = current
        current = next
        if (current.right) {
            next = current.right
            while (next.left) next = next.left
        } else {
            let ancestor = current.parent
            while (visited.includes(ancestor)) ancestor = ancestor.parent
            next = ancestor
        }
    }
}

const args = process.argv.slice(2)
const root = JSON.parse(args[0])

const callback = node => {
    console.log(node.value)
}
iterativeInOrderTraversal(root, callback)