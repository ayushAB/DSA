var areNumbersAscending = function(s) {
    const array = s.split(" ");
    let pre = -1;

    while (array.length !=0 ) {
        const p = array.shift();
        if( parseInt(p) ){
            if( pre >= parseInt(p) ){
                return false;
            }else {
                pre = parseInt(p);
            }
        }
    }
    return  true;
};

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")); // true
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s")); // false
console.log(areNumbersAscending("hello world 5 x 5")); //false