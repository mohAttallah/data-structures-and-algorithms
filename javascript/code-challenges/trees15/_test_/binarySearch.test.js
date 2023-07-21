'use strict';
const Node = require('../lib/Node');
const BinaryTree = require('../lib/BinaryTree');
const BinarySearchTree = require('../lib/BinarySearchTree');

let tree = null;
let BST = null;

describe('Binary Tree testing', () => {
    beforeAll(() => {
        BST = new BinarySearchTree();
        BST.add(5);
        BST.add(2);
        BST.add(7);
        BST.add(1);
        BST.add(3);
        BST.add(6);
        BST.add(8);
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

    it('Can successfully add nodes to the BinarySearchTree', () => {
        const binarySearchTree = new BinarySearchTree();
        binarySearchTree.add(5);
        binarySearchTree.add(3);
        binarySearchTree.add(7);
        binarySearchTree.add(2);
        binarySearchTree.add(4);
        expect(binarySearchTree.root.value).toEqual(5);
        expect(binarySearchTree.root.left.value).toEqual(3);
        expect(binarySearchTree.root.right.value).toEqual(7);
        expect(binarySearchTree.root.left.left.value).toEqual(2);
        expect(binarySearchTree.root.left.right.value).toEqual(4);
    });

    it('Can successfully return a collection from a pre-order traversal', () => {
        const expectedResult = [5, 2, 1, 3, 7, 6, 8];
        expect(BST.preOrder()).toEqual(expectedResult);
    });

    it('Can successfully return a collection from an in-order traversal', () => {
        const expectedResult = [1, 2, 3, 5, 6, 7, 8];
        expect(BST.inOrder()).toEqual(expectedResult);
    });

    it('Can successfully return a collection from a post-order traversal', () => {
        const expectedResult = [1, 3, 2, 6, 8, 7, 5];
        expect(BST.postOrder()).toEqual(expectedResult);
    });

    it('Check if tree has a value was Added', () => {
        expect(BST.contains(5)).toEqual(true);
        expect(BST.contains(0)).toEqual(false);
        expect(BST.contains(2)).toEqual(true);
        expect(BST.contains(7)).toEqual(true);
    });
});
