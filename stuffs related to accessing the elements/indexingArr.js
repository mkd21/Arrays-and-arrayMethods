let arr = [1 , 4, 5 , 23 , "animal"];

console.log(arr);
arr[3] = 564;         // updation will be done
console.log(arr);

console.log(arr[4]);   // element will be accessed

// but if we do somethong like 

arr[9] = "Mysterious update";   // element will be added at 9th index but rest indexes in between will be empty. size will also increase

console.log(arr);       