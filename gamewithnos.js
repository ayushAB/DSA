/**
 * You are given an array arr[], you have to 
 * re-construct an array arr[].
 * The values in arr[] are obtained by
 * doing Xor of consecutive elements in the array.
 */

const game_with_number= (array) =>{
    let newArr = [];
    for(i=0;i<array.length;i++) {
        if(i+1 > array.length) {
            newArr.push(array[i]);
        } else {
            const val = array[i] ^ array[i+1];
            newArr.push(val);
        }
    }
    return newArr;
}

console.log(game_with_number([10, 11, 1, 2, 3])) // 1 10 3 1 3
console.log(game_with_number([5, 9, 7, 6])) // 12 14 1 6 
