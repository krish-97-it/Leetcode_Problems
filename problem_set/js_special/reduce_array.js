/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0){
        return init;
    }
    for(var k=0; k<nums.length; k++){
        init = (fn(init, nums[k]));
    }
    return init;
};

// Sample Input One
var nums    = [1,2,3,4];
var fn      = function sum(accum, curr) { return accum + curr * curr; }
var init    = 100

// Sample Input Two
// var nums    = [1,2,3,4]
// var fn      = function sum(accum, curr) { return accum + curr; }
// var init    = 0

var new_arr = reduce(nums, fn, init);
console.log(new_arr);
