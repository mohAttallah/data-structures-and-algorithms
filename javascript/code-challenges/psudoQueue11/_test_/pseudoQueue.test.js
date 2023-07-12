const PseudoQueue = require('../pseudoQueue');

describe('PseudoQueue', () => {
    let pseudoQueue;

    beforeEach(() => {
        pseudoQueue = new PseudoQueue();
    });

    it('enqueue values correctly', () => {
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        pseudoQueue.enqueue(3);

        expect(pseudoQueue.dequeue()).toBe(1);
        expect(pseudoQueue.dequeue()).toBe(2);
        expect(pseudoQueue.dequeue()).toBe(3);
    });


    it(' throw an error when dequeue is called on an empty queue', () => {
        expect(() => pseudoQueue.dequeue()).toThrow(Error);
        expect(() => pseudoQueue.dequeue()).toThrow('Queue is empty');

    });


    it(' maintain the correct order of elements after enqueue and dequeue operations', () => {
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        pseudoQueue.enqueue(3);
        pseudoQueue.dequeue();

        expect(pseudoQueue.dequeue()).toBe(2);
        expect(pseudoQueue.dequeue()).toBe(3);
    });

    it(' handle multiple enqueue and dequeue operations correctly', () => {
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        pseudoQueue.enqueue(3);
        pseudoQueue.dequeue();
        pseudoQueue.enqueue(4);

        expect(pseudoQueue.dequeue()).toBe(2);
        expect(pseudoQueue.dequeue()).toBe(3);
        expect(pseudoQueue.dequeue()).toBe(4);
    });
});
