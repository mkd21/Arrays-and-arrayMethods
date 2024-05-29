// SOME METHOD ITERATES OVER THE ARRAY AND CHECKS IF THE CONDITION GIVEN IS FULLFILLED OR NOT 
// THE MOMENT CONDITION IS HIT THEN THE FURTHER CHECKING OF ARRAY WILL NOT HAPPEN
// this methods also returns TRUE or FALSE

let nums1 = [1,3,4,5,6,7,8,9];

// find if the given array has even number or not 

let res1 = nums1.some( (val) =>{
    // console.log(val);
    return val % 2 == 0;
})

// console.log(res1);


// find if any odd number is present or not 

let nums2 = [2 , 4 , 6 , 8 , 3 , 2 , 14];

let res2 = nums2.some( (val,index) =>{
    if(val % 2 != 0)
        console.log(val , index);

    return val % 2 != 0
})

console.log(res2);