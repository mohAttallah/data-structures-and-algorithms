"use strict"
function leftJoin(maps1, maps2) {
    const results = [];

    maps2.forEach((value2, key) => {
        let value1 = maps1.get(key);
        if (value1 !== undefined) {
            results.push([value1, value2]);
        }

    });
    return results;
}

module.exports = leftJoin;

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

console.log(leftJoin(maps1, maps2))