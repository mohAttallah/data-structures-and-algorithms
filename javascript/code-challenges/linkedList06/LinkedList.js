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


  insertBefore(value, newValue) {
    if (!this.head) {
    // list is Empty
    return;
    }
    if (this.head.value === value) {
      this.insert(newValue);
      return;
     }

    let currntNode = this.head;
    while (currntNode.next) {
      if (currntNode.next.value === value) {
        const newNode = new Node(newValue);
        newNode.next = currntNode.next;
        currntNode.next = newNode;
        this.size++;
        return;
      }
      currntNode = currntNode.next;
    }
  }


  insertAfter(value, newValue) {
    if (!this.head) {
    // list is Empty
    return;
    }
    // if (this.head.value === value) {
    //   this.append(newValue);
    //   return;
    // }
    let currntNode = this.head;
    while (currntNode) {
      if (currntNode.value === value) {
        const newNode = new Node(newValue);
        newNode.next = currntNode.next;
        currntNode.next = newNode;
        this.size++;
        return;
    }
    currntNode = currntNode.next;
  }
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
list.append(2);
list.insertBefore(2, 1);
list.insertAfter(2, 3)

console.log(list.toString());


