function counttrueandfalse(array){
    let truecount=0;
    let falsecount=0;

    array.forEach(value=>{
        if (value==true){
            truecount++;}
        else if(value==false){
           falsecount++;   
        }
    });
    return{truecount,falsecount};
}
const arry=[true,false,false,true];
const counts = counttrueandfalse(arry);
console.log(counts.truecount);
console.log(counts.falsecount);


// function countTrueAndFalse(array) {
//     let trueCount = 0;
//     let falseCount = 0;
  
//     array.forEach(value => {
//       if (value === true) {
//         trueCount++;
//       } else if (value === false) {
//         falseCount++;
//       }
//     });
  
//     return { trueCount, falseCount };
//   }
  
//   const array = [true, false, true, true, false, true];
//   const counts = countTrueAndFalse(array);
  
//   console.log(counts.trueCount);  // Output: 4
//   console.log(counts.falseCount); // Output: 2
  