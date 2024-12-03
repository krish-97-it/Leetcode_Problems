/**
 * @param {string} val
 * @return {Object}
 */
var expect = (val) => {
    expect.toBe(val);
    expect.notToBe(val);
};

var notToBe = (val) =>{
    if(val !== val){
        return {"value":true};
    }else{
        return {"error":"Equal"};
    }
}

var toBe = (val) => {
    if(val === val){
        return {"value":"true"};
    }else{
        return {"error":"Not Equal"};
    }
}

console.log(expect(5).toBe(5)); // true
expect(5).notToBe(5); // throws "Equal"