var CQueue = function () {
  this.stack1 = []
  this.stack2 = []
};
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
};
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length) {
    return this.stack2.pop()
  }
  if (!this.stack1.length) return -1
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop())
  }
  return this.stack2.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

 const obj = new CQueue()
 obj.appendTail(1)
 obj.appendTail(2)
 obj.appendTail(3)
 obj.deleteHead()
 console.log(obj)