/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const wordTable = s.split('').reduce((acc, cur, idx) => {
        if(acc[cur]) acc[cur]++;
        else acc[cur] = 1;
        return acc
    }, {});
    return Object.keys(wordTable).map((key) => ({ key, value: wordTable[key] })).sort((pre, cur) => cur.value - pre.value).reduce((acc, { key, value }) => {
      acc += new Array(value).fill(key).join('');
      return acc;
    }, '')
};