/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    const prefixSum = arr.reduce((acc, cur, index) => {
        acc.push(acc[index] + cur)
        return acc
    }, [0])
    
    let result = 0;
    let i = 1;
    while( i <= arr.length ) {
        let j = 0;
        while( i+j < prefixSum.length ){
            result += prefixSum[i + j] - prefixSum[j];
            j++
        }
        i += 2;
    }
    return result;
};