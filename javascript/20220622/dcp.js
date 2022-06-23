/*
Given a binary tree of integers, return an array of the sums of each branch in order from left to right.

A branch is defined as a path from the root node to any leaf node.
*/

const branchSums = root => {
    const sums = []
    getBranches(root, 0, sums)
    return sums
}

const getBranches = (node, sum, sums) => {
    sum += node.value
    if (!node.left && !node.right) {
        sums.push(sum)
    } else {
        if (node.left) getBranches(node.left, sum, sums)
        if (node.right) getBranches(node.right, sum, sums)
    }
}

const args = process.argv.slice(2)
const tree = JSON.parse(args[0])
const result = branchSums(tree)
console.log(result)
