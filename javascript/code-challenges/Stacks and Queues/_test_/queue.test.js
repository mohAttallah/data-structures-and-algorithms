'use strict';


'use strict';

const Queue = require('../lib/Queue');

describe('queue testing', () => {
    it('Create a new queue', () => {
        const queue = new Queue();
        expect(queue instanceof Queue).toBe(true);
    });

    it('rear of the queue is empty', () => {
        const queue = new Queue();
        expect(queue.rear).toBeNull();
    });

    it('front of any empty queue', () => {
        const queue = new Queue();
        expect(queue.front).toBeNull();
    });

    it('Push to queue', () => {
        const queue = new Queue();
        queue.enQueue(1);
        queue.enQueue(2);
        expect(queue.front.value).toBe(1);
        expect(queue.rear.value).toBe(2);
    });

    it('Enqueue multiple values into a queue', () => {
        const queue = new Queue();
        queue.enQueue(1);
        queue.enQueue(2);
        queue.enQueue(3);
        expect(queue.front.value).toBe(1);
        expect(queue.rear.value).toBe(3);
    });

    it('Dequeue from queue the expected value', () => {
        const queue = new Queue();
        queue.enQueue(1);
        queue.enQueue(2);
        const dequeuedValue = queue.deQueue();
        expect(dequeuedValue).toBe(1);
        expect(queue.front.value).toBe(2);
    });

    it('Peek into queue and see the expected value', () => {
        const queue = new Queue();
        queue.enQueue(1);
        queue.enQueue(2);
        expect(queue.peek()).toBe(1);
    });

    it('Empty a queue after multiple dequeues', () => {
        const queue = new Queue();
        queue.enQueue(1);
        queue.enQueue(2);
        queue.deQueue();
        queue.deQueue();
        expect(queue.front).toBeNull();
        expect(queue.rear).toBeNull();
    });

    it('Instantiate an empty queue', () => {
        const queue = new Queue();
        expect(queue.front).toBeNull();
        expect(queue.rear).toBeNull();
    });

    it('Calling dequeue or peek on an empty queue raises an exception', () => {
        const queue = new Queue();
        expect(() => queue.deQueue()).toThrow();
        expect(() => queue.peek()).toThrow();
    });
});
