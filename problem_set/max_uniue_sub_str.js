// ** Split a String Into the Max Number of Unique Substrings
// https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/description/

/**
 * @param {string} s
 * @return {number}
*/
function maxUnique(a,str){
    var mxCount = 0;
    for(var k=1; k<=str.length; k++){
        var temp    = str.substring(0,k);
        var findStr = a.indexOf(temp);
        if(findStr < 0){
            a.push(temp)
            var rem = str.substring(k);
            mxCount = Math.max(mxCount, maxUnique(a, rem)+1);
            console.log(mxCount);
            a.pop();
        }
    }
    return mxCount;
}

var maxUniqueSplit = function(s) {
   var arr = [];
   return maxUnique(arr, s);
};

console.log(maxUniqueSplit("ababccc"));


// ** Test-Case 1:
// Input: s = "ababccc"
// Output: 5
// Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.
// Test-Case 2:

// ** Input: s = "aba"
// Output: 2
// Explanation: One way to split maximally is ['a', 'ba'].
// Test-Case 3:

// ** Input: s = "aa"
// Output: 1
// Explanation: It is impossible to split the string any further.
 