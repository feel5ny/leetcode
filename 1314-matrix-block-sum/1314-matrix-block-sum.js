/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  const result = [];
  const sum = (r, c) => {
    let result = 0;
    const _r = [ r[0] > 0? r[0]: 0, 
                 r[1] > mat.length-1 ? mat.length-1 : r[1]
               ];
    const _c = [ c[0] > 0? c[0]: 0, 
                 c[1] > mat[0].length-1 ? mat[0].length-1: c[1]
               ];

    for(let a = _r[0]; a <= _r[1]; a++ ){
      for(let b = _c[0]; b <= _c[1]; b++ ){
        result += mat[a][b];
      }
    }
    return result;
  };

  for(let i = 0; i < mat.length; i++){
    for(let j=0; j< mat[0].length; j++){
      if(!result[i]) result.push([]);
      result[i].push(sum([i-k, i+k], [j-k, j+k]))
    }
  }

  return result
};
