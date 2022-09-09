/*
Given the head of a linked list, determine if the linked list is palindromic
without using any additional data structure.
*/

// recursively calls itself, passing in the same left but next right node until 
// the base case where right === undefined.
// returns an array of, firstly, whether or not the returned next (left) node 
// value matches the current call stack's right node value and, secondly, the
// returned next (left) node's next node, to be likewise compared.
// I also added some ternaries to make the last return values be single booleans.
const linkedListPalindrome = (left, right = left) => {
  if (!right) return [true, left]
  const result = linkedListPalindrome(left, right.next)
  if (result[0] && result[1].value === right.value) return result[1].next ?
    [true, result[1].next] :
    true
  else return left === right ? false : [false]
}

const args = process.argv.slice(2)
const head = JSON.parse(args[0])
const result = linkedListPalindrome(head)
console.log(result)