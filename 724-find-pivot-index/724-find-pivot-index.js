/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const prefix = [];
  for(let i = 0; i < nums.length; i++){
    prefix.push((prefix[i-1] || 0) + nums[i])
  }
  for(let j = 0; j < nums.length; j++){
    if(prefix[prefix.length - 1] - prefix[j] === (prefix[j-1] || 0)) return j;
  }
  return -1;
};