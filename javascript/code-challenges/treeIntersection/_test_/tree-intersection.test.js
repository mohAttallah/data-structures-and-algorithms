const BT = require("../assests/binaryTree");
const tree_intersection = require('../tree-intersection'); // Replace 'your-module-name' with the actual module path

describe('tree_intersection', () => {
    it(' return an empty array when both trees are empty', () => {
        const tree1 = new BT();
        const tree2 = new BT();
        const result = tree_intersection(tree1, tree2);
        expect(result).toEqual([]);
    });

    it(' return an empty array when one of the trees is empty', () => {
        const tree1 = new BT();
        tree1.insert(10);
        const tree2 = new BT();
        const result = tree_intersection(tree1, tree2);
        expect(result).toEqual([]);
    });

    it('return an empty array when there are no common values in the trees', () => {
        const tree1 = new BT();
        tree1.insert(10);
        tree1.insert(20);
        const tree2 = new BT();
        tree2.insert(5);
        tree2.insert(15);
        const result = tree_intersection(tree1, tree2);
        expect(result).toEqual([]);
    });

    it(' return an array of common values when there are common values in the trees', () => {
        const tree1 = new BT();
        tree1.insert(10);
        tree1.insert(20);
        tree1.insert(30);
        const tree2 = new BT();
        tree2.insert(20);
        tree2.insert(40);
        tree2.insert(30);
        const result = tree_intersection(tree1, tree2);
        expect(result).toEqual([30, 20]);
    });
});
