const kTree = require('./tree/k-ary-tree');
const fizzBuzz = require('./index');

describe('fizzBuzz function', () => {
    let KT;

    beforeAll(() => {
        KT = new kTree();
        KT.insert(1);
        KT.insert(2);
        KT.insert(3);
        KT.insert(4);
        KT.insert(15);
        KT.insert(6);
    });

    it('replace tree values with Fizz, Buzz, FizzBuzz, or original value correctly', () => {
        const output = ['1', '2', 'Fizz', '4', 'FizzBuzz', 'Fizz'];

        const treeInOrder = KT.inOrder();

        const newTree = fizzBuzz(KT);
        const newTreeInOrder = newTree.inOrder();

        expect(newTreeInOrder).toEqual(output);

        expect(treeInOrder).toEqual(KT.inOrder());
    });

    it('should handle an empty tree', () => {
        const emptyTree = new kTree();
        const result = fizzBuzz(emptyTree);
        expect(result.inOrder()).toEqual([]);
    });

    it('handle a tree with a single node', () => {
        const singleNode = new kTree();
        singleNode.insert(15);
        const result = fizzBuzz(singleNode);
        expect(result.inOrder()).toEqual(['FizzBuzz']);
    });
});
