/**
 * Given a binary tree containing n nodes. 
 * The problem is to find the sum of all the parent node’s which have a child node with value x.
 */

 function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


let sum = 0; 
const sumOfParentOfX = (root , x) => {
    if(root == null ) return 0;

    if ((root.left!== null && root.left.val == x) || (root.right!== null && root.right.val == x))
     sum += root.val;

     sumOfParentOfX(root.left,x);
     sumOfParentOfX(root.right,x);
}

const a = new TreeNode(4, null, null);
const b = new TreeNode(2, null, null);
const c = new TreeNode(5, null, null);
const d = new TreeNode(7, null, null);
const e = new TreeNode(2, null, null);
const f = new TreeNode(2, null, null);
const g = new TreeNode(3, null, null);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

sumOfParentOfX(a, 2);
console.log(sum);