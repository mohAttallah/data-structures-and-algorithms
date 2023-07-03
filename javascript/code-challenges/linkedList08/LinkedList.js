"use strict";
const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    let nextNode = this.head;

    const node = new Node(value);
    this.size++;

    this.head = node;
    node.next = nextNode;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
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

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.insert(newValue);
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        const newNode = new Node(newValue);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        const newNode = new Node(newValue);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  zipLists(list1, list2) {
    const zipList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 && current2) {
      zipList.append(current1.value);
      zipList.append(current2.value);
      current1 = current1.next;
      current2 = current2.next;
    }
    
    return zipList;
  }

  toString() {
    let str = "";
    let currentNode = this.head;
    while (currentNode) {
      str = str.concat(`{${currentNode.value}} -> `);
      currentNode = currentNode.next;
    }
    str = str.concat(`${currentNode}`);
    return str;
  }
}

module.exports = LinkedList;


const list1 = new LinkedList();
const list2 = new LinkedList();
let zipList = new LinkedList();

list1.append(1);
list1.append(3);
list1.append(2);

list2.append(5);
list2.append(9);
list2.append(4);

zipList=zipList.zipLists(list1, list2);

console.log(zipList.toString());


