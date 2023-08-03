'use strict';
const BinaryTree = require('../tree/BinaryTree');
const Node = require('../tree/Node');
const breadthFirst = require('../index.js');

// Test the breadthFirst function
describe('breadthFirst', () => {

    
    test(" return Binary Tree is empty", () => {
        const emptyTree = new BinaryTree(null);
        expect(breadthFirst(emptyTree)).toBe('Binary Tree is empty');
    });
    test('Failure', () => {
        const emptyTree = new BinaryTree(null);
        const result = breadthFirst(emptyTree);
        const expected = 'Binary Tree is empty';
        expect(result).toEqual(expected);
    });


    test('return the breadth-first traversal of  tree', () => {
        const a = new Node(2);
        const b = new Node(7)
        const c = new Node(5);
        const d = new Node(2)
        const e = new Node(6);
        const f = new Node(9)
        const g = new Node(5);
        const h = new Node(11);
        const k = new Node(4);
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        e.left = h;
        e.right = g
        c.right = f;
        f.left = k;


        const BT = new BinaryTree(a);
        const result = breadthFirst(BT);

        const expected = [2, 7, 5, 2, 6, 9, 11, 5, 4];

        expect(result).toEqual(expected);
    });
    test(' return the breadth-first traversal of a tree with only one level', () => {
        const a = new Node(1);
        const b = new Node(2);
        const c = new Node(3);
        const d = new Node(4);
        a.left = b;
        a.right = c;
        b.left = d;
        const oneLevelTree = new BinaryTree(a);
        const result = breadthFirst(oneLevelTree);
        const expected = [1, 2, 3, 4];
        expect(result).toEqual(expected);
    });


});
