/*
Given two distinct arrays representing binary search trees, determine if they represent
the same binary search tree without constructing one from either array.
*/

const sameBsts = (arrayOne, arrayTwo) => {
  // If the two arrays don't start with the same element, they cannot be the same bst.
  if (arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length) return false
  // If the two arrays are empty, they are technically the same empty bst.
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true
  // Otherwise, recursively perform the same test on the left and right subtrees
  // of each array while preserving the order of the values in each.
  // Getting the values that must necessarily be part of the left subtrees:
  const leftTreeOne = arrayOne.filter(num => num < arrayOne[0])
  const leftTreeTwo = arrayTwo.filter(num => num < arrayTwo[0])
  // Getting the values that must necessarily be part of the right subtrees:
  const rightTreeOne = arrayOne.slice(1).filter(num => num >= arrayOne[0])
  const rightTreeTwo = arrayTwo.slice(1).filter(num => num >= arrayTwo[0])
  // If either subtree doesn't pass the checks above, propagate a false back up the call stack
  return sameBsts(leftTreeOne, leftTreeTwo) && sameBsts(rightTreeOne, rightTreeTwo)
}

const args = process.argv.slice(2)
const arrayOne = JSON.parse(args[0])
const arrayTwo = JSON.parse(args[1])
const result = sameBsts(arrayOne, arrayTwo)
console.log(result)