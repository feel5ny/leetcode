/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false;
    if(s === goal) return [...s].some((sWord, sIdx) =>  goal.lastIndexOf(sWord) !== sIdx);
    
    const _goal = [];
    const _s = [...s].reduce((sList, sWord, idx) => {
      if(sWord !== goal[idx]) {
        _goal.push(goal[idx]) 
        sList.push(sWord)
      }
      return sList;
    }, [])

    return _goal.length === 2 && _goal[0] === _s[1] && _goal[1] === _s[0];
}