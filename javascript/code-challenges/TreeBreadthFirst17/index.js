'use strict';
const BinaryTree = require('./tree/BinaryTree');
/*
Write a function called breadth first
Arguments: BT
Return: list of all values in the BT, in the order they were encountered
*/
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


const BT = new BinaryTree;




console.log(breadthFirst(BT));
