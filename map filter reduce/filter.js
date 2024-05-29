// CLEAR FORM THE NAME ITSELF --> IT IS USED TO FILTER OUT THE UNDESIRED ELEMENTS OF THE ARRAY 


let months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "December"];

// let filteredArr = months.filter( (val) =>{
//     console.log(val);

//     return val.toUpperCase();       // all the value will be inserted in a new array but without uppercase
// })

// console.log(filteredArr);


// reason for the output is --> toUpperCase() works on string and string is a turthy value so it will include every element in the array



                // how it is actually used 

// let filteredArr = months.filter( (val) =>{  

//     return true;    --> will include every element in the array , as all the values are treated as truty
// })

// console.log(filteredArr);


// let filteredArr = months.filter( (val) =>{

//     return false;   --> will reject every element, as all the values are treated as falsy  []
// })

// console.log(filteredArr);



// let filteredArr = months.filter( (val) =>{

//     return val.length < 6;           // now this will give a valid result. it will filter out the elements whose length is smaller than 6
// })

// console.log(filteredArr);


// q: filter out the months whose length is 5 or greater than 5 

// let filteredMonth = months.filter( (iter) => iter.length >= 5);
// console.log(filteredMonth);


// q: return the array which contains the months with the letter M or m

let filteredMonth = months.filter( (val) => {

    // method 1 

    // let size = val.length;
    // for(let i = 0; i< size; i++){
    //     if(val[i] == "m" || val[i] == "M"){
    //         return val;
    //     }
    // }

    // method 2
    
    return val.includes("M") || val.includes("m");

    // method 3
    // return val.toLowerCase().includes("m");

});

// console.log(filteredMonth);

// q : filter out the students whose age is 18 or more 

let students = [
    {
        Name : "Mayank",
        age : 26
    },
    {
        Name : "Nikhil",
        age : 25
    },
    {
        Name : "Deepak",
        age : 25
    },
    {
        Name : "Akash",
        age : 16
    },
    {
        Name : "Vishal",
        age : 17
    },
    {
        Name : "Monu",
        age : 21
    },
    {
        Name : "Rimu",
        age : 25
    },
    {
        Name : "Purvi",
        age : 12
    }
]

let adultStudents = students.filter( (val) => val.age > 18)

// console.log(adultStudents);


// q : after filtering out the names and age of students, now filter out only the names of those adult students 

let studentsName = adultStudents.map( (val) =>{
    return val.Name;
})

// console.log(studentsName);

// ek channing bhi use kr skte hai 

let adultStudentsNameOnly = students.filter( (val) =>{
    return val.age >= 18;
}).map( (val) =>{
    return val.Name;
})

console.log(adultStudentsNameOnly);