/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let result = 0;
    
    const recursive = (prevSumList, currentN) => {
        if(currentN === n) return result = prevSumList.reduce((num, cur) => num + cur, 0);
        
        const curSumList = new Array(5)
                                .fill(0)
                                .map((num, idx) => prevSumList
                                                    .slice(idx)
                                                    .reduce((acc, cur) => acc + cur, 0));
        recursive(curSumList, currentN + 1);
    }
    
    recursive([1,1,1,1,1], 1);
    
    return result;
};