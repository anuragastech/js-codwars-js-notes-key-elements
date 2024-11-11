
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



