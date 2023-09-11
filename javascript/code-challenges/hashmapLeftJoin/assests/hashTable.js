'use strict'
const LinkedList = require('./linkedlist');

class Hashtable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    hash(key) {
        return key.split('').reduce((p, n) => {
            return p + n.charCodeAt(0)
        }, 0) * 599 % this.size;
    }

    set(key, value) {
        const hashedKey = this.hash(key);
        const entry = { [key]: value }
        if (!this.map[hashedKey]) {
            this.map[hashedKey] = new LinkedList();
        }
        this.map[hashedKey].insert(entry);
    }
}
module.exports = Hashtable;