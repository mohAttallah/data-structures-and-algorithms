const PseudoQueue = require('../pseudoQueue'); // Assuming your code is in a file named PseudoQueue.js

describe('PseudoQueue', () => {

    it('should enqueue values correctly', () => {
        const pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        pseudoQueue.enqueue(3);

        expect(pseudoQueue.stack1.pop()).toBe(3);
    });

    it('should dequeue values correctly', () => {
        const pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        pseudoQueue.enqueue(3);

        expect(pseudoQueue.dequeue()).toBe(1);
        expect(pseudoQueue.dequeue()).toBe(2);
        expect(pseudoQueue.dequeue()).toBe(3);
    });

    it('should return undefined when dequeue is called on an empty queue', () => {
        const pseudoQueue = new PseudoQueue();
        expect(pseudoQueue.dequeue()).toBeUndefined();
    });

    it('should maintain the correct order of elements after enqueue and dequeue operations', () => {
        const pseudoQueue = new PseudoQueue();

        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        pseudoQueue.enqueue(3);
        pseudoQueue.dequeue();
        pseudoQueue.enqueue(4);

        expect(pseudoQueue.dequeue()).toBe(2);
        expect(pseudoQueue.dequeue()).toBe(3);
        expect(pseudoQueue.dequeue()).toBe(4);
    });

    it('should handle multiple enqueue and dequeue operations correctly', () => {
        const pseudoQueue = new PseudoQueue();

        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        pseudoQueue.dequeue();
        pseudoQueue.enqueue(3);
        pseudoQueue.enqueue(4);
        pseudoQueue.dequeue();
        pseudoQueue.dequeue();
        pseudoQueue.enqueue(5);

        expect(pseudoQueue.dequeue()).toBe(4);
        expect(pseudoQueue.dequeue()).toBe(5);
    });
});
