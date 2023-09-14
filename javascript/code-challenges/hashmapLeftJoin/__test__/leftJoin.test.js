const leftJoin = require('../index');

describe('leftJoin', () => {
    it('return an array of value pairs for matching keys', () => {
        const maps1 = new Map();
        maps1.set('diligent', 'employed');
        maps1.set('fond', 'enamored');
        maps1.set('guide', 'usher');
        maps1.set('outfit', 'garb');
        maps1.set('wrath', 'anger');

        const maps2 = new Map();
        maps2.set('diligent', 'idle');
        maps2.set('fond', 'averse');
        maps2.set('guide', 'follow');
        maps2.set('flow', 'jam');
        maps2.set('wrath', 'delight');

        const result = leftJoin(maps1, maps2);

        const expected = [
            ['employed', 'idle'],
            ['enamored', 'averse'],
            ['usher', 'follow'],
            ['anger', 'delight'],
        ];

        expect(result).toEqual(expected);
    });

    it('return an empty array for empty maps', () => {
        const maps1 = new Map();
        const maps2 = new Map();
        const result = leftJoin(maps1, maps2);

        expect(result).toEqual([]);
    });

    it('return an empty array if maps1 is empty', () => {
        const maps1 = new Map();
        const maps2 = new Map();
        maps2.set('diligent', 'idle');
        const result = leftJoin(maps1, maps2);
        expect(result).toEqual([]);
    });

    it('return an empty array if maps2 is empty', () => {
        const maps1 = new Map();
        maps1.set('diligent', 'employed');
        const maps2 = new Map();
        const result = leftJoin(maps1, maps2);
        expect(result).toEqual([]);


    });
})