/**
 * Given a binary tree containing n nodes. 
 * The problem is to find the sum of all the nodes of binary.
 */

 function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


let sum = 0; 
const sumOfAllNodes = (root) => {
    if(root == null ) return;
     sum += root.val;
     sumOfAllNodes(root.left);
     sumOfAllNodes(root.right);
}

//     9
//    / \
//   8   6
//  / \  / \ 
// 5   2 1
const a = new TreeNode(9, null, null);         
const b = new TreeNode(8, null, null);
const c = new TreeNode(6, null, null);
const d = new TreeNode(5, null, null);
const e = new TreeNode(2, null, null);
const f = new TreeNode(1, null, null);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

sumOfAllNodes(a);
console.log(sum);