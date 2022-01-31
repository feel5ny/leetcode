/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.BIT = [];
    this.BIT.length = nums.length + 1;
    this.BIT.fill(0);
    
    this.origin = [];
    this.origin.length = nums.length + 1;
    
    
    this.add = (pos, x) => {
        pos++;
        while(pos < this.BIT.length){
            this.BIT[pos] += x;
            pos += pos & -pos;
        }
    }
    
     this.sum = (pos) => {
        let result = 0;
        
        pos++;
        while(pos > 0){
            result += this.BIT[pos]
            pos &= pos - 1;
        }
        return result;
    }
    
     this.sumRange = (left, right) => {
        let result = this.sum(right);
        if(left > 0) result -= this.sum(left -1);
        return result;
    }
     
     for(let i = 0; i < nums.length; i++){
        this.origin[i] = nums[i];
        this.add(i, nums[i]);
    }
    return null;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.add(index, val - this.origin[index]);
    this.origin[index] = val;
    return null;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.sumRange(left, right);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */