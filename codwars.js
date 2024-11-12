
// 1) qst

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// ----------------------------------
// answer=>
      function descendingOrder(n){
    //...
   const c= n.toString().split('').sort() 
   //note-num convert to string ,split in to each("4","2",),then sort make ascenting ("2","4")
   const d=c.reverse()
   // reverse will reverse in into ("4","2")
   const e=d.join('')
   //join will back to array ("4,2")
   console.log(d)
   const x=parseFloat(e)
   
   //here it will convert string in to numbers  back ok
    return x
  }



  

//   --------------------------------------------------------------------------------

// 2) qst
// Problem: Write a JavaScript function that takes an array as input and returns a new array with all duplicate values removed. The returned array should keep the original order of elements.

// Example:

// javascript
// Copy code
// Input: [1, 2, 3, 1, 2, 4, 5]
// Output: [1, 2, 3, 4, 5]

// --------------------------------  
// answer





function goal (u){

 return  u.filter((value,index)=>{
return u.indexOf(value)===index
  })

}
console.log(goal([1,2,5,6,5,6]));


// note  

// In your array [1, 2, 5, 6, 5, 6], when you call indexOf(6), it returns 3 because:

// The indexOf method always returns the first occurrence of the specified value in the array.
// First element (1): indexOf(1) is 0, which matches its current index 0. Keep it.
// Second element (2): indexOf(2) is 1, which matches index 1. Keep it.
// Third element (5): indexOf(5) is 2, which matches index 2. Keep it.
// Fourth element (6): indexOf(6) is 3, which matches index 3. Keep it.
// ----------------------------------------------------------------------------------------------------- 


// 3) qst   
// Given an array of objects representing users, each with a unique id, name, and age, write a function to filter out all users below a specified age and return a list of names of the remaining users.

// Example:
// javascript
// Copy code
// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 20 },
//   { id: 3, name: 'Charlie', age: 30 },
//   { id: 4, name: 'David', age: 19 }
// ];

// const minimumAge = 21;

// filterUsersByAge(users, minimumAge); // 

// ------------------------------------------------------- 
// answer 


const minimumAge = 26;
function ceal(o){

  return o.filter((value)=>{
   if(value.age>=minimumAge){  ///here only  we get the whole data of age relate to  minimumage contition  ok.
    return value
    }

  }).map((l)=>l.name)

}
console.log(ceal( [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 19 }
]));

// .filter((value) => value.age >= minimumAge): Keeps only users whose age is greater than or equal to minimumAge.
// .map((value) => value.name): After filtering, we use map to extract only the name property.



