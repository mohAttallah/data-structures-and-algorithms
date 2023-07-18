'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let arr = [];
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
}



module.exports = BinaryTree;

