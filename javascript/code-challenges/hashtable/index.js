'use strict'
const LinkedList = require('./assets/linekdlist');

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
            this.map[hashedKey].insert(entry);
        } else {
            let record = this.map[hashedKey];
            record = record.values()
            this.map[hashedKey].replace(record, entry)
        }
    }

    get(key) {
        const hashedKey = this.hash(key);
        let record = this.map[hashedKey];
        if (record === undefined) {
            return null;
        }
        record = record.values()
        return { ...record[0] }
    }

    has(key) {
        const hashedKey = this.hash(key);
        const record = this.map[hashedKey];
        return record !== undefined ? true : false
    }
    keys() {
        const keys = []
        this.map.forEach((record) => {
            keys.push(...record.values())
        })
        return keys ;
    }
}

const makeHash = new Hashtable(19);
makeHash.set('Waleed', 'Instructor');
makeHash.set('Mohammad', 'Student');
makeHash.set('Ahmad', 'Student');
makeHash.set('Mohammad', 'TA');
makeHash.set('Ahmad', 'Student');
makeHash.set('Ahmad', 'Student');
console.log(makeHash.get("s"));

module.exports = Hashtable;