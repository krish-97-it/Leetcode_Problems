// Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
*/
var lengthOfLongestSubstring = function(s) {

    // initialize longest substring length to 0 by default
    var long_len = 0, longest_sub_str = "";

    // if string is empty return 0
    if(s.length === 0){
        return 0;
    }

    // If there is only one charecter inside string return max length 1
    if(s.length === 1){
        return 1;
    }

    // for each charecter of our string we will try to check a uniue longest substring
    for(var i = 0; i<s.length; i++){
        // every time we start to check a fresh longest substring we will reset new_substr variable
        let new_substr = "";

        for(var k=i; k<s.length; k++){
            // to check each charecter is already present in our substring or not
            if(new_substr.indexOf(s[k]) >= 0){     // new_substr.includes(s[k])
                break;  //Exit;
            }else{
                new_substr +=  s[k]     //add charecter to our substring
            }

            // if newsub str length > previous longest substring length, then update longest substring
            if(long_len < new_substr.length){
                 longest_sub_str = new_substr;
                 long_len = new_substr.length;
            }
            // long_len = Math.max(long_len, new_substr.length);
        }
    }

    return (longest_sub_str.length);
    // return long_len;
};