/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  const startValue = nums.findIndex(num => num > 0) + 1;
  const prefixSum = nums.reduce((acc, cur, index) => {
        acc.push(acc[index] + cur)
        return acc
    }, [startValue])
  const minValue = Math.min(...prefixSum.slice(1))
  return minValue > 0 ? startValue : startValue - minValue + 1
};