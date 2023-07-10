'use strict'
const Stack = require("./Stack");


class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enQueue(queue, value) {
    // Move all elements from stack1 to stack2
        
    while (!isEmpty(queue.stack1)) {
        push(queue.stack2, pop(queue.stack1));
    }

    // Push the new value to stack1
        
    push(queue.stack1, value);

    // Move all elements back from stack2 to stack1
        
    while (!isEmpty(queue.stack2)) {
        push(queue.stack1, pop(queue.stack2));
    }
}


    dequeue() {
        return this.stack1.pop();
    }
}


const PQ = new PseudoQueue();


PQ.enQueue(1,2);
PQ.enQueue(1,3);
PQ.enQueue(1,4);

console.log(PQ);

console.log(PQ.dequeue()); // Output: 10
console.log(PQ.dequeue()); // Output: 15
