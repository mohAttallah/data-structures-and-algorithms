'use strict';

const Node = require('./Node');
const BT = require('./BinaryTree');

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.left = b;
a.right = c;

c.left = d;
c.right = e;

b.left = f;


const tree = new BT(a);
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
