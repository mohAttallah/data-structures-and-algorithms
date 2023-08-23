const mergeSort = require('./index'); // Update the path accordingly

describe('merge', () => {
    test('sort array in ascending order', () => {
        const unsortedArray = [7, 3, 9, 2, 5];
        const sortedArray = mergeSort(unsortedArray);
        expect(sortedArray).toEqual([2, 3, 5, 7, 9]);
    });

    test(' handle array with a single element', () => {
        const singleElementArray = [42];
        const sortedArray = mergeSort(singleElementArray);
        expect(sortedArray).toEqual([42]);
    });

    test(' handle array with duplicate values', () => {
        const duplicateArray = [5, 2, 5, 9, 2, 7];
        const sortedArray = mergeSort(duplicateArray);
        expect(sortedArray).toEqual([2, 2, 5, 5, 7, 9]);
    });
});
