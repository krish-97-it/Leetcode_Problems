//* Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
//* The returned array should be created such that returnedArray[i] = fn(arr[i], i).
//* Please solve it without the built-in Array.map method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/
var map = function(arr, fn) {
    let new_arr = [];
    for(var i = 0; i<arr.length; i++){
        new_arr.push(fn(arr[i], i));
    }
    return new_arr;
};

// Sample Input One
// var arr     = [1,2,3];
// var fn      = function plusone(n) { return n + 1; }

// Sample Input Two
var arr     = [1,2,3];
var fn      = function plusI(n, i) { return n + i; }

var new_arr = map(arr, fn);
console.log(new_arr);