/**
 * Given an array A[] of size n. 
 * The task is to find the largest element in it.
 */
/** 
 *  function largest() which takes the array A[] and its 
 *  size n as inputs and returns the maximum element in the array.
 */

const largest = (array,n) => {
    if(n > array.length ) return "invalid input";
    let max = 0;
    for (let i = 0; i < n; i++) {
        if(max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

console.log(largest([1, 8, 7, 56, 90],5)) // ans - 90
console.log(largest([1, 2, 0, 3, 2, 4, 5],7)) // ans - 5