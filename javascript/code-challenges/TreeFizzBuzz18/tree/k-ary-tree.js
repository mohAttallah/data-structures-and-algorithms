const Node = require("./Node");

class kTree {
    constructor(k) {
        this.root = null;
        this.k = k;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value, new Array(this.k).fill(null));
        } else {
            this.traversal(this.root, value);
        }
    }

    traversal(node, value) {
        for (let i = 0; i < this.k; i++) {
            if (node.children[i] === null) {
                node.children[i] = new Node(value, new Array(this.k).fill(null));
                return;
            } else {
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
        traversal(this.root);
        return arr;
    }

    fizzBuzz(kTree) {
        const result = kTree.inOrder();
        for (let i = 0; i < result.length; i++){
            if (result[i] % 3 === 0 && result[i] % 5 === 0) {
                // FizzBuzz
            } else if (result[i] % 3 === 0) {
                //Fizz
            } else if (result[i] % 5 === 0) {
                // Buzz
            } else {
                //result[i] 
            }
        }
    }

}

const KT = new kTree(1);

KT.insert(1);
KT.insert(2);
KT.insert(3);
KT.insert(4);
KT.insert(5);
KT.insert(6);

console.log(KT.inOrder());

