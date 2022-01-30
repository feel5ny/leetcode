/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.prefix = [];
    for(let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            if(!this.prefix[i]) this.prefix.push([]);
            const top = this.prefix[i -1]? this.prefix[i -1][j] : 0;
            const left = this.prefix[i][j - 1] || 0;
            const diag = (this.prefix[i -1] && this.prefix[i - 1][j - 1]) || 0;
            
            this.prefix[i].push(matrix[i][j] + top + left - diag);
        }
    }
    
    return null;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const top = this.prefix[row1 - 1]? this.prefix[row1 - 1][col2] : 0;
    const left = this.prefix[row2][col1 - 1] || 0;
    const diag = (this.prefix[row1 - 1] && this.prefix[row1 - 1][col1 - 1]) || 0;
    
    return this.prefix[row2][col2] - top - left + diag
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */