// it will check for each element in the array for the given condition 
// if all the element passes the test then only it will retunr true 
// even if one element fails the conditon then it will return false

let nums1 = [2 , 4 , 6,  8, 10 , 15 , 17, 14];


// check if all the numnbers are even in the array or not 


// some menthod use nhi kr skte hai kyuki wo toh pahel element me hi true dekh ke return kr jyega 


let res = nums1.every( (val , index) =>{

    if(val % 2 == 0)
        // console.log(index);
    return val % 2 == 0;
})

console.log(res);





let nums2 = [2 , 4 , 6,  8, 10 , 14];

let exec = (val) => val % 2 == 0;


console.log(nums2.every(exec));





// check if the values are below the threshhold value or not 

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 100, 13];
const array2 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
console.log(array2.every(isBelowThreshold));