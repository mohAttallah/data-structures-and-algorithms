'use strict';
const BinarySearchTree = require('../BinarySearchTree');
let BST;
describe('BinarySearchTree', () => {
    beforeAll(() => {

        BST = new BinarySearchTree();
        BST.add(5);
        BST.add(2);
        BST.add(7);

    })
    it('Add node on Correctly Location', () => {

        expect(BST.root.value).toEqual(5);
        expect(BST.root.left.value).toEqual(2);
        expect(BST.root.right.value).toEqual(7);
    });

    it('Chaeck if tree has a vlaue was Added', () => {
        expect(BST.contains(5)).toEqual(true);
        expect(BST.contains(0)).toEqual(false);
        expect(BST.contains(2)).toEqual(true);
        expect(BST.contains(7)).toEqual(true);
    });
});
