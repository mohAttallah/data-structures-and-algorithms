"use strict";
// implementation Singly Linked List

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    this.size++;

    if (!this.head) {
      this.head = node;
      return this;
    }
    // current Statr from the head
    let currntNode = this.head;
    while (currntNode.next) {
      // current.next is (true) keep going
      // loop iterate until to the last node

      // update  current Node value
      currntNode = currntNode.next;
    }
    // currne node now is last node

    //update next to Arrow  new Node
    currntNode.next = node;
  }

  //add a new node with that value to the head of the list with an O(1)

  insert(value) {
    let nextNode = this.head;

    const node = new Node(value);
    this.size++;

    // swap the head
    this.head = node;
    node.next = nextNode;
  }

  includes(value) {
    let currntNode = this.head;
    while (currntNode) {
      if (currntNode.value === value) {
        return true;
      }
      currntNode = currntNode.next;
    }
    return false;
  }

  toString() {
    let str = "";
    let currntNode = this.head;
    while (currntNode) {
      str = str.concat(`{${currntNode.value}} -> `);
      currntNode = currntNode.next;
    }
    str = str.concat(`${currntNode}`);
    return str;
  }
}

module.exports = LinkedList;

const list = new LinkedList();

list.insert("second");
list.append(3);
list.insert("first");

// console.log(list);
// console.log(list.head.next.value)
console.log(list.includes("firs"));

console.log(list.toString());
