'use strict';


const Queue = require('../Queue');
describe('queue tseting', () => {
    it('Create a new queue', () => {
        const queue = new Queue();
        expect(queue instanceof Queue).toBeTruthy();
    })
    it('rear on  Queue is Empty', () => {
        const queue = new Queue();
        expect(queue.rear).toBeNull();
    })
    it('front on any empty queue', () => {
        const queue = new Queue();
        expect(queue.front).toBeNull();
    })
    it('Push to queue', () => {
        const queue = new Queue();
        queue.enQueue(1);
        queue.enQueue(2);
        expect(queue.front.value).toBe(1);
        expect(queue.rear.value).toBe(2);
    })
    it('pop from queue', () => {
        const queue = new Queue();
        queue.enQueue(2);
        expect(queue.deQueue(2)).toBe(2);
    })
})