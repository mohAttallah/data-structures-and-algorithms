'use strict'
const LinkedList = require('./linkedList');

class Hashtable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    hash(key) {
        console.log()
        return key.split('').reduce((p, n) => {
            return p + n.charCodeAt(0)
        }, 0) * 599 % this.size;
    }
    set(key, value) {
        const hashedKey = this.hash(key);
        if (!this.map[hashedKey]) this.map[hashedKey] = new LinkedList();
        const entry = { [key]: value }

        console.log(entry)
    }
}

const makeHash = new Hashtable(19);
makeHash.set('Waleed', 'Instructor')
console.log(makeHash.hash('Mohammad'))

module.exports = Hashtable;