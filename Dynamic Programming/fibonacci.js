// Using memoization for reducing time and space complexity
const fib = (n, memo = {} ) => {

    if( n in memo ) return memo[n];

    if ( n <= 2 ) return 1;

    memo[n] = fib(n-1,memo) + fib(n-2,memo)
    return memo[n];
};

console.log(fib(1));
console.log(fib(10));
console.log(fib(100));
