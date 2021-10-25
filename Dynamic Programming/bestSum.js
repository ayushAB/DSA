/* 
Problem: 
- Write a function `canSum(targetSum,numbers)` that takes in a target sum and an array of numbers as arguments.
- The function should return a an array containing any combination of elements that add up to exactly the targetsum.
- If there is no combination that adds up to the targetsum , then return null
- You may use elements of the array as many times as needed.
- You may assume that all in put numbers are non-negative.
- If mutiple combinations possible , you may return any single one.
*/

const bestSum = (targetSum, numbers, memo = {}) => {

    if(targetSum in memo) return memo[targetSum];
    if( targetSum === 0) return [];
    if( targetSum < 0 ) return null;
    
    let shortestCombination =  null;
    for ( let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if( remainderCombination !== null) {
            let combination = [...remainderCombination, num ];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}
console.log(bestSum(7,[5,3,4,7])); // [7]
console.log(bestSum(100,[1,2,5,25])); //[25, 25, 25, 25]