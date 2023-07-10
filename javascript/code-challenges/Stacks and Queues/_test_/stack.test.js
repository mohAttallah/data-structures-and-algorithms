'use strict';

const Stack = require('../Stack');

describe('Stack testing', () => {
    it('Create a new stack', () => {
        const stack = new Stack();
        expect(() => {
            expect(stack instanceof Stack).toBeTruthy();
        }).not.toThrowError();
    });

    it('peek on an empty stack', () => {
        const stack = new Stack();
        expect(() => {
            stack.peek();
        }).toThrowError('The Stack is Empty');
    });

    it('Push to stack', () => {
        const stack = new Stack();
        stack.push(2);
        expect(stack.top.value).toBe(2);
    });

    it('Push multiple values onto the stack', () => {
        const stack = new Stack();
        stack.push(2);
        stack.push(4);
        stack.push(6);
        expect(stack.top.value).toBe(6);
    });

    it('Pop from stack', () => {
        const stack = new Stack();
        stack.push(2);
        expect(stack.pop()).toBe(2);
    });

    it('Empty a stack after multiple pops', () => {
        const stack = new Stack();
        stack.push(2);
        stack.push(4);
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
    });

    it('Peek the next item on the stack', () => {
        const stack = new Stack();
        stack.push(2);
        stack.push(4);
        expect(stack.peek()).toBe(4);
    });

    it('Instantiate an empty stack', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBeTruthy();
    });

    it('Calling pop on an empty stack raises an exception', () => {
        const stack = new Stack();
        expect(() => stack.pop()).toThrow(Error);
    });

    it('Calling peek on an empty stack raises an exception', () => {
        const stack = new Stack();
        expect(() => stack.peek()).toThrowError('The Stack is Empty');
    });
});

