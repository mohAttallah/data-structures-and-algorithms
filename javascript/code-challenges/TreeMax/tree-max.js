'use strict';
const Node = require('./node/Node');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        const traversal = node => {
            arr.push(node.value);
            if (node.left) traversal(node.left);
            if (node.right) traversal(node.right);
        };
        traversal(this.root);
        return arr;
    }

    postOrder() {
        let arr = [];
        const traversal = node => {
            if (node.right) traversal(node.right);
            if (node.left) traversal(node.left);
            arr.push(node.value);
        };
        traversal(this.root);
        return arr;
    }

    inOrder() {
        let arr = [];
        const traversal = node => {
            if (node.left) traversal(node.left);
            arr.push(node.value);
            if (node.right) traversal(node.right);
        };
        traversal(this.root);
        return arr;
    }

    findMaximum() {
        if (!this.root) {
            return null;
        }
        let arr = [];
        const traversal = node => {
            arr.push(node.value);
            if (node.left) traversal(node.left);
            if (node.right) traversal(node.right);
        };
        traversal(this.root);
        let max = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        return max;
    }
}


module.exports = BinaryTree;

