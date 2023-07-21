'use strict';

const Node = require('../lib/Node');
const BinaryTree = require('../lib/BinaryTree');

let tree = null;

describe('Binary Tree testing', () => {
    beforeAll(() => {
        let a = new Node("a");
        let b = new Node("b");
        let c = new Node("c");
        let d = new Node("d");
        let e = new Node("e");
        let f = new Node("f");

        a.left = b;
        a.right = c;

        c.left = d;
        c.right = e;

        b.left = f;

        tree = new BinaryTree(a);
    });
    it('Can successfully instantiate an empty tree', () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBe(null);
    });
    it('Can successfully instantiate a tree with a single root node', () => {
        const rootNode = new Node("root");
        const newTree = new BinaryTree(rootNode);
        expect(newTree.root.value).toEqual("root");
        expect(newTree.root.left).toBe(null);
        expect(newTree.root.right).toBe(null);
    });


    it('contructor', () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBe(null);
        expect(tree.root.value).toEqual("a")
    });
    it('preOrder testing', () => {
        const expectedResult = ['a', 'b', 'f', 'c', 'd', 'e']
        expect(tree.preOrder()).toEqual(expectedResult);
    })
    it('postOrder testing', () => {
        const expectedResult = ['f', 'b', 'd', 'e', 'c', 'a']
        expect(tree.postOrder()).toEqual(expectedResult);
    })
    it('inOrder testing', () => {
        const expectedResult = ['f', 'b', 'a', 'd', 'c', 'e']
        expect(tree.inOrder()).toEqual(expectedResult);
    })
});
