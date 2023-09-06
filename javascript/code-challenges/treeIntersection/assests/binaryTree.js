class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    postOrder() {
        const result = [];
        this.postOrderRecursive(this.root, result);
        return result;
    }

    postOrderRecursive(node, result) {
        if (node !== null) {
            this.postOrderRecursive(node.left, result);
            this.postOrderRecursive(node.right, result);
            result.push(node.data);
        }
    }
}


module.exports = BinaryTree;
