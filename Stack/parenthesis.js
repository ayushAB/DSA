var removeOuterParentheses = function (S) {
    let stack = [];
let result = '';
for (const s of S) {
   if( s === '(') {
       if (stack.length) {
           result+=s;
       }
       stack.push(s);
   } else {
       stack.pop();
       if (stack.length) {
           result+=s;
       }
   }
}

return result;
    
};

console.log(removeOuterParentheses("(()())(())")); // "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // 