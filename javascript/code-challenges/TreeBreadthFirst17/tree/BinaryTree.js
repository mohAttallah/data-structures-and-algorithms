'use strict';
const Node = require("./Node");

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
        const traversal = (node) => {
            if (node) {
                traversal(node.left);
                traversal(node.right);
                arr.push(node.value);
            }
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


    addValue(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            const insert = (node) => {
                if (value < node.value) {
                    if (node.left === null) {
                        node.left = new Node(value);
                    } else {
                        insert(node.left);
                    }
                } else if (value > node.value) {
                    if (node.right === null) {
                        node.right = new Node(value);
                    } else {
                        insert(node.right);
                    }
                } else {

                    console.log("Ignoring duplicate value:", value);
                }
            };
            insert(this.root);
        }
    }
}


module.exports = BinaryTree;
