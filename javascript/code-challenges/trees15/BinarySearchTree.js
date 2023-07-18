'use strict'

//The nodes on the right are larger than the root
//The nodes on the left are smallest the root

const BinaryTree = require('./BinaryTree');
const Node = require('./Node')


class BinarySearchTree extends BinaryTree {
    constructor() {
        super();
    }

    add(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        } else {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }
    }

    contains(value) {
        return this.search(this.root, value)?true :false;
    }
    
    search(node, value) {
        if (node === null)
            return null;
        else if (value > node.value)
            return this.search(node.right, value);
        else if (value < node.value)
            return this.search(node.left, value);
        else
            return node;
    }
}

module.exports = BinarySearchTree;
