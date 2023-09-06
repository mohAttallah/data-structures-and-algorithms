'use strict';
const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;

            }
            current.next = newNode;
        }
    }
    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value)
            current = current.next;
        }
        return values;
    }

}

module.exports = LinkedList; 