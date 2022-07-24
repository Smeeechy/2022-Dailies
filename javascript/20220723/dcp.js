/*
Given two linked lists of positive integers, return a new linked list where each node is a digit of their sum.
The linked lists are ordered from least significant to most significant digits:
first:  3 -> 3 -> 3
second: 3 -> 2 -> 1
result: 6 -> 5 -> 4 
*/

const sumOfLinkedLists = (linkedListOne, linkedListTwo) => {
  let sumOne = listSum(linkedListOne)
  let sumTwo = listSum(linkedListTwo)
  const sum = (sumOne + sumTwo).toString().split('').reverse().map(Number)
  const newHead = { value: sum[0] }
  let current = newHead
  for (let i = 1; i < sum.length; i++) {
    current.next = { value: sum[i] }
    current = current.next
  }
  return newHead
}

const listSum = list => {
  let sum = 0
  let pow = 0
  let current = list
  while (current) {
    sum += Math.pow(10, pow++) * current.value
    current = current.next
  }
  return sum
}

const args = process.argv.slice(2)
const headOne = JSON.parse(args[0])
const headTwo = JSON.parse(args[1])
const result = sumOfLinkedLists(headOne, headTwo)
console.log(result)
