// map method always return an array 

let months = ["January" , "February" , "March" , "April" , "may" , "June" , "July"];

// if we write 

// months.map( (iterator) =>{
//     console.log(iterator);
// })

// ye code will print all the months but will also return an array of size 7 and it's value of each element will be undefined 
// yaha se undefined array print nhi hoga, devtools me likho jake tb dikhega


let newArray = months.map( (iterator) =>{
    
    return iterator.toUpperCase();
});

// console.log(newArray);

// uppar jo callback function ke andar jo arguements hoga uspr hi koi method lga skte hai 


let nums = [2,3,5,7];

// let res = nums.map( (iter)=> iter * 2)

// same as 

let res = nums.map( (iter) =>{
    return iter * 2;
})

// console.log(res);

                //      SEEING INDEX ARGUEMENT AND THE THIRD ARGUEMENT IS TO GET THE ARRAY ITSELF


// months.map( (val , index)=>{
//     console.log(val,index);
// })

months.map( (value , index , array) =>{

    console.log(value);    // will print each element of the array
    console.log(index);    // will print the index
    console.log(array);   //  will print the array on which we are applying the map method

})

// although we will get an array of size 7 will value of each element as undefined as this map method is not returning anything