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

/*
* 글자가 같으면: 선택된 글자가 다른 index에 있는지 확인.
* 글자가 다르면: 
** 1. list diff만 추출
** 2. 횟수제한 validation
** 3. switch했을때 같은 element인지
*/
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