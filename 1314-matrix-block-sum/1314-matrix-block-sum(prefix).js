/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const prefix = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (!prefix[i]) prefix.push([]);
      const top = prefix[i - 1] ? prefix[i - 1][j] : 0;
      const left = prefix[i][j - 1] || 0;
      const diag = (top && left && prefix[i - 1][j - 1]) || 0;

      prefix[i].push(top + left - diag + mat[i][j]);
    }
  }

  return prefix.map((row, i) => {
    return row.map((col, j) => {
      const r = [Math.max(i - k, 0), Math.min(i + k, mat.length - 1)]; // y
      const c = [Math.max(j - k, 0), Math.min(j + k, mat[0].length - 1)]; // x

      const top = prefix[r[0] - 1] ? prefix[r[0] - 1][c[1]] : 0;
      const left = prefix[r[1]][c[0] - 1] || 0;
      const diag = (top && left && prefix[r[0] - 1][c[0] - 1]) || 0;

      return prefix[r[1]][c[1]] + diag - top - left;
    })
  })
};
