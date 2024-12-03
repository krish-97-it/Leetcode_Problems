// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
*/
var myPow = function(x, n) {  // we can think (x^n) that (x^2)*n/2 or (x*x)^n/2;

    // if power(n) is 0 then return 1 [a^0 = 1] 
    if(n===0){
        return 1;
    }

    // if base(x) is 0 then return 0;
    if(x === 0){
        return 0;
    }

    // if power(n) is negative then 
    if(n < 0) {
        x = 1 / x;
        n = -(n);
    }

    var result = 1.0;
    while(n>0){
        if(n%2 === 1){  //check power is odd or not
            result = result * x;
        }
        x=x*x;
        n=Math.floor(n/2);
    }
    return result;
};

var res = myPow(2, 5);
console.log(res);