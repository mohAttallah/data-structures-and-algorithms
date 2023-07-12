'use strict'

const Node = require('./Node');
class Queue {
    constructor() {
        this.rear = null;
        this.front = null;
        this.lenght = 0;
    }
    isEmpty() {
        return this.front === null
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
        if (this.isEmpty()) throw new Error('The Queue is Empty');

        const temp = this.front;
        this.front = temp.next;

        if (this.front === null) this.rear = null;
        this.lenght--;
        return temp.value;
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error('The Queue is Empty');
        } else {
            return this.front.value;
        }
    }

}

const QQ = new Queue;

QQ.enQueue(1);
QQ.enQueue(2);
QQ.deQueue();
QQ.deQueue();
console.log(QQ);

module.exports = Queue;