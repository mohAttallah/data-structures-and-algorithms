'use strict'
const Node = require("./Node");

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }


    push(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.isEmpty()) throw new Error('The StacK is Empty');
        const temp = this.top;
        this.top = this.top.next;
        // cahnge the Arrow to null
        temp.next = null;
        this.length--;
        return temp.value;
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error('The Stack is Empty');
        } else {
            return this.top.value;
        }
    }

    isEmpty() {
        return this.top === null
    }
}


module.exports = Stack;
