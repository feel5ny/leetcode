/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const { row, col, diag } = moves.reduce((acc, cur, idx) => {
    const { row, col, diag } = acc;
    const isA = idx % 2 === 0;
    const [x, y] = cur;
    const isPositiveDiagonal = x === y;
    const isNegativeDiagonal = x + y === 2;
    
    if (isA) {
      --row[x];
      --col[y];
      if(isPositiveDiagonal) --diag[0];
      if(isNegativeDiagonal) --diag[1];
    } else {
      ++row[x];
      ++col[y];
      if(isPositiveDiagonal) ++diag[0]
      if(isNegativeDiagonal) ++diag[1];
    }
    return acc
  }, {
    row: [3,3,3],
    col: [3,3,3],
    diag: [3,3],
  })
  
  const score = [...row, ...col, ...diag];
  switch(true) {
    case Math.min(...score) === 0:
      return 'A';
    case Math.max(...score) === 6:
      return 'B';
    case  moves.length === 9:
      return 'Draw';
    default:
      return 'Pending';
  }
};