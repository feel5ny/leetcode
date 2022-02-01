/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.reduce((acc, cur, index) => {
        acc.push((acc[index - 1] || 0) + cur)
        return acc;
    }, [])
};