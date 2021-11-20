function numWays(n, memo = {}) {
    if(n==0 || n==1) return 1;
    
    memo[n] =  numWays(n-1, memo) + numWays(n-2, memo);
    return memo[n];
}
console.log(numWays(3)); //3
console.log(numWays(4)); //5
console.log(numWays(5)); //8
console.log(numWays(30)); // 1346269