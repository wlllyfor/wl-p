/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteNode = function(head, val) {
  let pre = new ListNode(-1)
  pre.next = head
  let node = pre
  while(node.next) {
    if(node.next.val === val) {
      node.next = node.next.next
      continue 
    }
    node = node.next
  }
  return pre.next
};

const head = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 1,
      next: {
        val: 9,
        next: null
      }
    }
  }
}

console.log(deleteNode(head, 5));