/*
Given the head of a singly linked list which ends in a loop, return the node at the beginning of the loop.
Do this in constant space.
*/

const findLoop = head => {
  let first = head
  let second = head
  // have the first visit every node and the second skip every other node until they match
  do {
    first = first.next
    second = second.next.next
  } while (first !== second)
  // once they match, due to math stuff, they are the same distance away from our target
  // as the head of the list is from the target, so we reset the first to the head and
  // increment them both at the same speed. the node they match on again is our target
  first = head
  while (first !== second) {
    first = first.next
    second = second.next
  }
  return first
}

const args = process.argv.slice(2)
const head = JSON.parse(args[0])
const result = findLoop(head)
console.log(result)