'use strict';

const Node = require('../Node');
const BinaryTree = require('../BinaryTree');

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
        const expectedResult = ['e', 'd', 'c', 'f', 'b', 'a']
        expect(tree.postOrder()).toEqual(expectedResult);
    })
    it('inOrder testing', () => {
        const expectedResult = ['f', 'b', 'a', 'd', 'c', 'e']
        expect(tree.inOrder()).toEqual(expectedResult);
    })
});
