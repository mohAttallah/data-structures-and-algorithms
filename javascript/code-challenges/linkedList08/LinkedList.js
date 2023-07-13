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


  zipLists(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;
  let temp1, temp2;

  while (current1 && current2) {
    temp1 = current1.next;
    temp2 = current2.next;

    current2.next = temp1;
    current1.next = current2;

    current1 = temp1;
    current2 = temp2;
  }

  if (current2) {
    list1.tail.next = current2;
    list1.tail = list2.tail;
  }

  return list1;
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

zipList = zipList.zipLists(list1, list2);

console.log(zipList.toString());


