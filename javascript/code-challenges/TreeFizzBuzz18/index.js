'use strict';

const kTree = require('./tree/k-ary-tree');

function fizzBuzz(k_Tree) {
    if (k_Tree.k === null) return "k-tree is Empty";
    const values = k_Tree.inOrder();
    const newKtree = new kTree();
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 3 === 0 && values[i] % 5 === 0) {
            newKtree.insert('FizzBuzz');
        } else if (values[i] % 3 === 0) {
            newKtree.insert('Fizz');
        } else if (values[i] % 5 === 0) {
            newKtree.insert('Buzz');

        } else {
            newKtree.insert(`${values[i]}`);
        }
    }
    return newKtree;
}

module.exports = fizzBuzz;
