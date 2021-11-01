
var MyQueue = function() {
    this.value = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  ++ this.value.length;
  this.value[this.value.length - 1] = x;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const first = this.value[0]
  this.value = this.value.slice(1)
  return first; 
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.value[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.value.length; 
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */