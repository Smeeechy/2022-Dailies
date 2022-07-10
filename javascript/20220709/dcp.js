/*
Given 2 descendants and a first ancestor, find the youngest common ancestor between the two descendants.
*/

const getYoungestCommonAncestor = (topAncestor, descendantOne, descendantTwo) => {
  let depth1 = 0
  let depth2 = 0
  let current

  // find depths
  current = descendantOne
  while (current !== topAncestor) {
    current = current.ancestor
    depth1++
  }
  current = descendantTwo
  while (current !== topAncestor) {
    current = current.ancestor
    depth2++
  }

  // find youngest common ancestor
  let current1 = descendantOne
  let current2 = descendantTwo
  if (depth1 > depth2) {
    while (depth1 > depth2) {
      current1 = current1.ancestor
      depth1--
    }
  }
  if (depth1 < depth2) {
    while (depth1 < depth2) {
      current2 = current2.ancestor
      depth2--
    }
  }
  while (current1 !== current2) {
    current1 = current1.ancestor
    current2 = current2.ancestor
  }
  return current1
}

const args = process.argv.slice(2)
const topAncestor = JSON.parse(args[0])
const descendantOne = JSON.parse(args[1])
const descendantTwo = JSON.parse(args[2])
const yca = getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo)
console.log(yca)