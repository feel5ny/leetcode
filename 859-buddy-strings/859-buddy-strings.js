/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

const CHANGE_CHANCE_COUNT = 2;
const isValidChangeChanceCount = (targetDiff, goalDiff) => targetDiff.length === CHANGE_CHANCE_COUNT && goalDiff.length === CHANGE_CHANCE_COUNT;
const isSameElementWhenSwitched = ([targetFirst, targetLast], [goalFist, goalLast]) => {
    return targetFirst === goalLast && targetLast === goalFist
}

var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false;
    if(s === goal) return [...s].some((sWord, sIdx) =>  goal.lastIndexOf(sWord) !== sIdx);
    
    const goalDiff = [];
    const targetDiff = [...s].reduce((sList, sWord, idx) => {
      if(sWord !== goal[idx]) {
        goalDiff.push(goal[idx]);
        sList.push(sWord);
      }
      return sList;
    }, [])

    return isValidChangeChanceCount(targetDiff, goalDiff) && isSameElementWhenSwitched(targetDiff, goalDiff);
}