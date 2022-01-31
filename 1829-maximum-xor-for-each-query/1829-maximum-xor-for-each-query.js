/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
  const prefix = [nums[0]];
  for(let i = 1; i < nums.length; i++){
    const before = prefix[i] || prefix[0]
    const value = before === nums[i] ? 0 : before === 0 ? nums[i] : before ^ nums[i]
    prefix.unshift(value)
  }
  return prefix.map((item) => item^(Math.pow(2, maximumBit) - 1))
};