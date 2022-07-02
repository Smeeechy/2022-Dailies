/*
Given a linked list of integers, remove all duplicate values from that linked list in O(n) time and O(1) space.
*/

const removeDuplicatesFromLinkedList = root => {
    let current = root
    while (current) {
        let prev = current
        let toCheck = current.next
        while (toCheck) {
            if (toCheck.value === current.value) prev.next = toCheck.next
            else prev = toCheck
            toCheck = toCheck.next
        }
        current = current.next
    }
    return root
}