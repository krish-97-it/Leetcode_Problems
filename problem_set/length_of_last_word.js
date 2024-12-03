//* Given a string s consisting of words and spaces, return the length of the last word in the string.
//* A word is a maximal 
//* substring
//* consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
*/
var lengthOfLastWord = function(s) {
    let remove_space = s.trim();     //Remove space from start and end of the string
    let split_string = remove_space.split(" ");     //now split string by space and store each word in array
    let split_string_len = split_string.length;     //get array length
    return split_string[split_string_len-1].length;     //last element will be on [length-1] index
};

var str     = "   fly me   to   the moon  ";
var length  = lengthOfLastWord(str);
console.log(length);