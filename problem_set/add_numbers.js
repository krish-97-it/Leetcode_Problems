// Add numbers of LinkedList and return the sum as a linked list. [non-empty integer linkdList]

var add_numbers_lists = function(l1,l2){

    // Convert LinkedList to Array
    function convertLinkedListToArray(linked_list){
        let returnedArr = [];       // Initialise an array to return
        let head        = linked_list       // Initialize head to LinkedList
        
        // Traverse/looping nodes of Linked List
        while(head != null){
            returnedArr.push(head.val);     // Insert element into array
            head = head.next;       // Initialize head to LinkedList
        }

        return returnedArr
    }

    // Convert the ListNodes to Arrays and reverse
    var list_array_one          = convertLinkedListToArray(l1).reverse();       // [2,4,3] -> ['3','4','2']
    var list_array_two          = convertLinkedListToArray(l2).reverse();       // [5,6,4] -> ['4','6','5']

    // Add numbers of two array by converting it to string and BigInt for converting to integrs(large number);
    var total                   = parseInt(list_array_one.join('')) + parseInt(list_array_two.join(''));    // 807 in integer

    // Convert Total to String
    var convertTotal_toString   = total.toString();     // 807 in String

    // Convert String to array
    var convertTotal_toArray    = convertTotal_toString.split(''); [8,0,7]

    // ** Convert and return Linked List - way 1 ** //
    // Initialize a new empty linkedList for storing resultant number's digit as each node
    // let returnLinkedList = null;
    // Loop through array and assign each digit to a node of linkedList
    // for(var k = 0; k<convertTotal_toArray.length; k++){
    //     returnLinkedList = {
    //         val: parseInt(convertTotal_toArray[k]), 
    //         next: returnLinkedList,
    //     };
    // }
    // return returnLinkedList;

    // ** Convert and return Linked List - way 2 ** //
    // Again reverse Sum/result
    var rev_Total               = convertTotal_toArray.reverse();   // [7,0,8] in array format

    // Initialize a new LinkedList with node (first digit from left)
    let res_LinkedList          = new ListNode(parseInt(rev_Total[0]));
    let l_head                  = res_LinkedList;

    for(var k=1; k<rev_Total.length; k++){
        l_head.next             = new ListNode(parseInt(rev_Total[k]));     // insert a node after current node
        l_head                  = l_head.next;      // Move head to next node
    }
    return res_LinkedList;
}

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}


// ** ----------- For OutPut ----------- ** //
// ** Test Case - 1 ** //
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// ** Test Case - 2 ** //
// Input: l1 = [0], l2 = [0]
// Output: [0]

// ** Test Case - 3 ** //
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// declare two array of elements
let arr1  = [2,4,3];
let arr2  = [5,6,4];

// Create LinkedList and add each element of array in it
let arr1_list = null;
let arr2_list = null;

// for each element of array create node
for(var j=arr1.length-1; j>=0; j--){
    arr1_list = {
        val : arr1[j],
        next: arr1_list,
    };
}
for(var i=arr2.length-1; i>=0; i--){
    arr2_list = {
        val : arr2[i],
        next: arr2_list,
    };
}
// call add_number function to get the result
let sum   = add_numbers_lists(arr1_list, arr2_list);

// Display it in array format
let res_display = [];
let res_h = sum;
while(res_h != null){
    res_display.push(res_h.val);
    res_h = res_h.next;
}
console.log(res_display);
