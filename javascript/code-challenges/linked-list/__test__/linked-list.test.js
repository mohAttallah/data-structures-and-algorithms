"use strict";

// Require our linked list implementation
const LinkedList = require("../LinkedList");

describe("Linked List", () => {
  it("Creating a empty linked list", () => {
    const List = new LinkedList();
    expect(List.head).toBeNull();
  });

  it("insert into the LinkedList", () => {
    const List = new LinkedList();
    List.insert("first");
    expect(List.head.value).toBe("first");
  });

  it("insert into the LinkedList", () => {
    const List = new LinkedList();
    List.insert("first");
    expect(List.head.value).toBe("first");
  });

  it("insert multiple nodes into the linked list", () => {
    const List = new LinkedList();
    List.insert("third");
    List.insert("second");
    List.insert("first");

    expect(List.includes("second")).toBe(true);
    expect(List.includes("fourth")).toBe(false);
  });

  it("return a collection of all the values", () => {
    const List = new LinkedList();
    List.insert("third");
    List.insert("second");
    List.insert("first");
    expect(List.toString()).toBe("{first} -> {second} -> {third} -> null");
  });
});
