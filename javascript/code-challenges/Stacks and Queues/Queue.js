'use strict'

const Node = require('./Node');
class Queue {
    constructor() {
        this.rear = null;
        this.front = null;
        this.lenght = 0;
    }

    enQueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode
            this.rear = newNode;
        }
        this.lenght++;
    }

    deQueue() {
        if (this.isEmpty()) throw new Error('The Stacj is Empty');
        const temp = this.front;
        this.front = temp.next;
        this.lenght--;
        return (temp.value);
    }
    isEmpty() {
        return this.front === null
    }
}

const QQ = new Queue;

QQ.enQueue(1);
QQ.enQueue(2);
QQ.enQueue(3);
QQ.enQueue(4);
QQ.deQueue();
console.log(QQ);

module.exports = Queue;