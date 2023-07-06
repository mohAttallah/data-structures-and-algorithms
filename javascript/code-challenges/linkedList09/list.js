"use strict";
const Node = require("./node");

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        let nextNode = this.head;

        const node = new Node(value);
        this.size++;

        this.head = node;
        node.next = nextNode;
    }

    includes(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    append(value) {
        const node = new Node(value);
        this.size++;

        if (!this.head) {
            this.head = node;
            return this;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }
    reverse() {
        if (!this.head) {
            return "Linked list is empty";
        } else {
            let current = this.head;
            let previous = null;
            let nextNode = null;

            while (current) {
                nextNode = current.next;
                current.next = previous;
                previous = current;
                current = nextNode;
            }
            this.head = previous;
        }
    }


    toString() {
        let str = "";
        let currentNode = this.head;
        while (currentNode) {
            str = str.concat(`{${currentNode.value}} -> `);
            currentNode = currentNode.next;
        }
        str = str.concat(`${currentNode}`);
        return str;
    }
}

module.exports = LinkedList;


const list1 = new LinkedList();


list1.append('a');
list1.append('b');
list1.append('c');
list1.reverse();



console.log(list1.toString());


