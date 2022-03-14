/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];
  
    const recursive = (rowIndex, preRow) => {
      if(rowIndex === numRows) return;
        
      const draftPreRow = [...preRow];
      draftPreRow.push(0);
      draftPreRow.unshift(0);
      
      const curRow = draftPreRow.map((num, idx) => num + draftPreRow[idx + 1])
      curRow.pop();
      result.push(curRow);
        
      recursive(rowIndex + 1, curRow)
    }
    
    recursive(1, [1]);
    return result;
};
