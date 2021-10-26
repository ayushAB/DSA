const fib = (n) => {
    let table = Array( n+1 ).fill(0);
    table[1] = 1;

    for(let i=0; i<=n; i++){
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[n];
}

console.log(fib(6)); //8 
console.log(fib(20)); // 6765
console.log(fib(3)); // 2
console.log(fib(50)); //12586269025
console.log(fib(60)); //1548008755920