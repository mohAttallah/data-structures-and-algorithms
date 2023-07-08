'use strict';


const Stack = require('../Stack');

describe('Stack tseting', () => {
    it('Create a new stack', () => {
        const stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    })
    it('peek on any empty stack', ()=> {
        const stack = new Stack();
        expect(stack.peek()).toBeNull();
    })
    it('Push to stack', () => {
        const stack = new Stack();
        stack.push(2);
        expect(stack.top.value).toBe(2);
    })
    it('pop from stack', () => {
        const stack = new Stack();
        stack.push(2);
        
        expect(stack.pop(2)).toBe(2);
    })
})