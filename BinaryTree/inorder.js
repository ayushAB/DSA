function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const  inorder = (root) => {

    if(root === null) return;

     inorder(root.left);
     resultTree.right = root;
     resultTree = root;
     inorder(root.right);
}

const a = new TreeNode(3, null, null);
const b = new TreeNode(5, null, null);
const c = new TreeNode(2, null, null);
const d = new TreeNode(4, null, null);
const e = new TreeNode(1, null, null);
const f = new TreeNode(6, null, null);
const g = new TreeNode(8, null, null);
const h = new TreeNode(7, null, null);
const i = new TreeNode(9, null, null);
let resultTree = new TreeNode(0,null,null);


b.left = a;
b.right = f;
a.left= c;
a.right = d;
c.left = e;
f.right = g;
g.left= h;
g.right = i; 


inorder(b);
console.log(resultTree);