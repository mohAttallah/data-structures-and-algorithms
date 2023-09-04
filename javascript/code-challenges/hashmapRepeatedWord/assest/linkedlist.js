'use strict';
const Node = require('./Node');
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
    check(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    replace(oldValue, newValue) {
        let current = this.head;
        while (current) {
            if (current.value === oldValue) {
                current.value = newValue;
                return true;
            }
            current = current.next;
        }
        return false;
    }


}

module.exports = LinkedList; 