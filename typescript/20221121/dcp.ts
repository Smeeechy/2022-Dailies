/*
Given the head of a sorted linked list, delete all duplicates such that 
each element appears only once. Return the linked list sorted as well.
*/

type ListNode = {
  val: number
  next: ListNode | null
}

export const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (head === null) return null
  let newHead = head
  while (newHead.next && newHead.next.val === newHead.val) newHead = newHead.next

  let prev = newHead
  let current = newHead.next
  while (current) {
    if (!current.next || (current.next && current.next.val !== current.val)) {
      prev.next = current
      prev = current
    }
    current = current.next
  }

  return newHead
}
