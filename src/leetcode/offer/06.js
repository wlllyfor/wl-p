// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function(head) {
  const res = []
  while(head !== null) {
    res.unshift(head.val)
    head = head.next
  }
  return res
};

const node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next:{
        val: 4,
        next: null
      }
    }
  }
}

console.log(reversePrint(node))