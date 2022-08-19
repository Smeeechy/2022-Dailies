/*
Given the head of a singly linked list and an integer k, remove the kth last node from the list.
If the node to remove is the head, instead update its values.
*/

const removeKthNodeFromEnd = (head, k) => {
  let length = 1
  let end = head
  let kthPrev = head
  for (let i = 0; i < k; i++) {
    if (!end.next) break
    end = end.next
    length++
  }
  while (end.next) {
    end = end.next
    kthPrev = kthPrev.next
    length++
  }
  if (k === length) {
    head.value = head.next.value
    head.next = head.next.next
  } else kthPrev.next = kthPrev.next.next
}

const args = process.argv.slice(2)
const SLList = JSON.parse(args[0])
const k = parseInt(args[1])
removeKthNodeFromEnd(SLList, k)
