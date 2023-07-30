'use strict';
const BinaryTree = require('./tree/BinaryTree');
const Node = require('./tree/Node')

function breadthFirst(BT) {
    if (BT.root !== null) {
        let current = BT.root
        let arr = []
        let result = []
        arr.push(current);

        while (arr.length) {
            current = arr.shift();
            result.push(current.value);
            if (current.left) arr.push(current.left)
            if (current.right) arr.push(current.right)
        }

        return result;
    }
    else {
        return "Binary Tree is empty";
    }

}
module.exports = breadthFirst;



const a = new Node(2);
const b = new Node(7)
const c = new Node(5);
const d = new Node(2)
const e = new Node(6);
const f = new Node(9)
const g = new Node(5);
const h = new Node(11);
const k = new Node(4);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = h;
e.right =g
c.right = f;
f.left = k;



const BT = new BinaryTree(a)

console.log(breadthFirst(BT));
