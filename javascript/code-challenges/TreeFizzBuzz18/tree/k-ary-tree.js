const Node = require("./Node");

class kTree {
    constructor(k) {
        this.root = null;
        this.k = k;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value, this.k);
        } else {
            this.traversal(this.root, value);
        }
    }
    traversal(node, value) {
        if (!node.children.length) {
            node.children.push(new Node(value, this.k));
            return;
        } else {
            for (let i = 0; i < node.children.length; i++) {
                this.traversal(node.children[i], value);
            }

        }
    }

        inOrder() {
            let arr = [];
            const traversal = node => {
                if (!node) return;
                for (let i = 0; i < node.children.length; i++) {
                    traversal(node.children[i]);
                }
                arr.push(node.value);
            };
            if (this.root) {
                traversal(this.root);
            }
            return arr;
        }
    }

module.exports = kTree;