//** Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// https://leetcode.com/problems/sqrtx/description/

/**
 * @param {number} x
 * @return {number}
*/
var mySqrt = function(x) {
    if(x === 1){
        return 1;
    }

    //  Using Binary Search
    let start = 1, end = Math.floor(x/2);   //  let set start to 1 and end to half of the number i.e square root of x should be lesser than equals to x/2

    //  Loope until start reach to ends
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);    //evaluate mid value

        // checks if the square of the mid-point is equal to the number we want to find the square root of. 
        if(mid * mid === x) {
            return mid;
        }else if(mid * mid < x) {   //  if the search range is updated based on whether the square of the mid-point is less than x
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return end;
};