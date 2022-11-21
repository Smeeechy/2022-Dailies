/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made 
by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

type ListNode = {
  val: number
  next: ListNode | null
}

export const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  if (list1 === null && list2 === null) return null
  if (list1 !== null && list2 === null) return list1
  if (list2 !== null && list1 === null) return list2
  const newHead = list1!.val > list2!.val ? list2! : list1!
  if (newHead === list1) list1 = list1.next
  else list2 = list2!.next
  let current = newHead
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }
  if (list1 !== null) current.next = list1
  if (list2 !== null) current.next = list2
  return newHead
}
