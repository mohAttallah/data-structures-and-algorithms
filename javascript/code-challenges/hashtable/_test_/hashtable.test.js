'use strict';
const Hashtable = require('../index');

describe('Hashtable', () => {
    let makeHash;

    beforeEach(() => {
        makeHash = new Hashtable(19);
    });

    it('set & get ', () => {
        makeHash.set('Waleed', 'Instructor');
        expect(makeHash.get('Waleed')).toStrictEqual({ "Waleed": "Instructor" });
    });

    it('should return null ', () => {
        expect(makeHash.get('NonKey')).toBeNull();
    });

    it('keys', () => {
        makeHash.set('Waleed', 'Instructor');
        makeHash.set('Mohammad', 'Student');
        makeHash.set('Ahmad', 'Student');
        expect(makeHash.keys()).toEqual([{ "Ahmad": "Student" }, { "Mohammad": "Student" },{ "Waleed": "Instructor"}]);
    });


    it('Hash Size ', () => {
        const key = 'TestKey';
        const hashedKey = makeHash.hash(key);
        expect(hashedKey).toBeLessThan(19);
        expect(hashedKey).toBeGreaterThanOrEqual(0);
    });

});
