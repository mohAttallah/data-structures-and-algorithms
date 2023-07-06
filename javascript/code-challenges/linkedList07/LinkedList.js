"use strict";
// implementation Singly Linked List

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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

  append(value) {
    const node = new Node(value);
    this.size++;

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currntNode = this.head;
    while (currntNode.next) {
      currntNode = currntNode.next;
    }

    currntNode.next = node;
  }

  kthFromEnd(k) {
    if (!this.head) return ("LinkedList is Empty");
    if (k > this.size) return ("Exception")
    let currntNode = this.head
    let locationOfnode = this.size - k;

    for (let i = 1; i <= locationOfnode; i++) {
      if (i !== 1) currntNode = currntNode.next;
    }
    return currntNode.value;
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
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list.toString())

console.log(list.kthFromEnd(0));

