/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const prefixSum = nums.reduce((acc, cur, index) => {
        acc.push(acc[index] + cur)
        return acc
    }, [0]);
    
    return nums.findIndex((num, index) => {
        const left = prefixSum[index];
        const right = prefixSum[prefixSum.length - 1] - prefixSum[index + 1];
        return left === right;
    })
};