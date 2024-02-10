
function bubbleSort(arr) {
  // Iterate through the array
  //do will run once and then check the while statement to see what we are checking.
  let swapped = true;
  while (swapped) {
   debugger;
  swapped = false;
   for (let i = 0; i < arr.length - 1; i++) {
     // check to see if arr[i] is less than i + 1.
     let firstEl = arr[i];
     let secondEl = arr[i+1];
     // If the current value is greater than its neighbor to the right
     // Swap those values
    if (firstEl > secondEl) {
       [arr[i], arr[i+1]] = [arr[i+1],arr[i]]
       swapped = true;
       // Do not move this console.log
       console.log(arr.join(","));
     }
     
   }
   
   // If you get to the end of the array and no swaps have occurred, return
   // Otherwise, repeat from the beginning
   if(!swapped) {
     return arr;
    } 
 }






}
debugger
let arr = [2,4,6,8,1,3,5,7,9];
bubbleSort(arr);

module.exports = bubbleSort;