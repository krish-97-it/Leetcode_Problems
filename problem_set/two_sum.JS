// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// https://leetcode.com/problems/palindrome-number/
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function(nums, target) {
    for(var k = 0; k<nums.length; k++){
        for(var j = 0; j<nums.length; j++){
            if(k !== j){
                if((nums[k] + nums[j]) === target){
                    return [k, j]
                }
            }
        }
    }
};

// ** Test Case - 1 ** //
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1];
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

// ** Test Case - 2 ** //
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// ** Test Case - 3 ** //
// Input: nums = [3,3], target = 6
// Output: [0,1]

var nums_array = [2,7,11,15];
var target_sum = 9;
var res = twoSum(nums_array, target_sum);
console.log(res);