/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let { left, right } = { left: 0, right: nums.reduce((acc, cur) => (acc += cur, acc),0) }
  for(let i = 0; i < nums.length; i++){
    left += nums[i-1] || 0;
    right -= nums[i];
    if(left === right) return i;
  }
  return -1;
};