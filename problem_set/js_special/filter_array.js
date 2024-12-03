//* Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

//* The fn function takes one or two arguments:
//* arr[i] - number from the arr
//* i - index of arr[i]
//* filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
//* Please solve it without the built-in Array.filter method.


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/
var filter = function(arr, fn) {
    let new_arr = [];
    for(let i=0; i<arr.length; i++){
        // if fn return true element will be pushed to new array
        (fn(arr[i], i))? new_arr.push(arr[i]):'';
    }
    return new_arr;
};

// Sample Input One
arr         = [-2,-1,0,1,2];
var fn      = function plusOne(n) { return n + 1 }

// Sample Input Two
// var arr     = [0,10,20,30];
// var fn      = function greaterThan10(n) { return n > 10; }

var new_array = filter(arr, fn);
console.log(new_array);