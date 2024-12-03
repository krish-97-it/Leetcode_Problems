// Given an integer x, return true if x is a palindrome and false otherwise 121,242,141
/**
 * @param {number} x
 * @return {boolean}
*/
var isPalindrome = function(x) {
    let num = x;
    let rev = 0;
    while(num > 0){    
        let rem     = parseInt(num % 10.00); // 1
        rev         = parseInt(rev*10 + rem);  // 121
        num         = parseInt(num/10.00);  // 0
    }

    if(x === rev){
        return true
    }else{
        return false
    }
};

var check = isPalindrome(121);
console.log(check)