const BinaryTree = require('../tree-max');
const Node = require('../node/Node');
let tree = null;

describe('BinaryTree', () => {
    beforeAll(() => {
        let a = new Node(10);
        let b = new Node(5);
        let c = new Node(20);
        let d = new Node(8);
        let e = new Node(30);
        let f = new Node(25);

        a.left = b;
        a.right = c;

        c.left = d;
        c.right = e;

        b.left = f;
        tree = new BinaryTree(a);
    });

    it('return the maximum value for a tree with duplicate values', () => {
        const newTree = tree;
        expect(newTree.findMaximum()).toEqual(30);
    });
    it('return null for an empty binary tree', () => {
        const emptyTree = new BinaryTree(null);
        expect(emptyTree.findMaximum()).toBeNull();
    });


});
