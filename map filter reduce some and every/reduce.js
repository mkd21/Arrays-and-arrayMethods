let nums = [1,2,3,4,5,6];

let sum = nums.reduce( (acc , currVal,index) =>{
    console.log(acc , currVal , index);
    return acc + currVal;
} , 0)

console.log(sum);



// let res = anyArray.reduce( (acc , currVal)=>{

// } , acc_Ka_initial_Value_Yhi_Rhega);


        // PRODUCT OF ELEMENTS IN AN ARRAY 

let product = nums.reduce( (acc , currVal) =>{
    return acc * currVal;
} , 1)

console.log(product);