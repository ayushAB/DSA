/* 
Problem: 
- Write a function `canSum(targetSum,numbers)` that takes in a target sum and an array of numbers as arguments.
- The function should return a boolean indicating wether or not it is possible to generate the targetSum using numbers from the array.
- You may use elements of the array as many times as needed.
- You may assume that all in put numbers are non-negative.
*/

const canSum = (targetSum,numbers,memo = {}) => {
    
    // checking result is already present
    if(targetSum in memo) return memo[targetSum];
    // We know that if the targetSum value is zero then yes the elements in array can be used to generate the target sum.
    if(targetSum === 0) return true;
    //we know that if targetSum is negative there are no possible solution to generate the targetSum.
    if(targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;
        if( canSum(remainder,numbers,memo) === true ) {
            memo[targetSum] = true;
            return true;
        }       
    } 
    // we return false here cause we need to check if there is atleast one possible solution there for the targetSum value.
    memo[targetSum] = false;
    return false;
    
}

console.log(canSum(800,[7,4]))