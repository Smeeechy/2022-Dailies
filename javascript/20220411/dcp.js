/*
You are given a binary tree in a peculiar string representation. Each node is written in the form (lr), where l corresponds 
to the left child and r corresponds to the right child.

If either l or r is null, it will be represented as a zero. Otherwise, it will be represented by a new (lr) pair.

Here are a few examples:

A root node with no children: (00)
A root node with two children: ((00)(00))
An unbalanced tree with three consecutive left children: ((((00)0)0)0)
Given this representation, determine the depth of the tree.
*/

const s = process.argv.slice(2)[0];
let depth = -1;
let maxDepth = -1;
for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') depth++;
    else if (s[i] === ')') depth--;
    if (depth > maxDepth) maxDepth = depth;
}
console.log(maxDepth);
