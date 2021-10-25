/* 
Problem: 
- Write a function `canSum(targetSum,numbers)` that takes in a target sum and an array of numbers as arguments.
- The function should return a an array containing any combination of elements that add up to exactly the targetsum.
- If there is no combination that adds up to the targetsum , then return null
- You may use elements of the array as many times as needed.
- You may assume that all in put numbers are non-negative.
- If mutiple combinations possible , you may return any single one.
*/

const howSum = (targetSum, numbers, memo = {}) => {

    if(targetSum in memo) return memo[change];
    if( targetSum === 0) return [];
    if( targetSum < 0 ) return null;

    for ( let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = howSum(remainder, numbers, memo);
        if( remainderCombination !== null) {
            memo[targetSum] = [...remainderCombination, num];
            return  memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
}

console.log(howSum(7,[2,3])) // [3, 2, 2]