const LinkedList = require("../LinkedList");

describe("Linked List", () => {
  it("Can successfully add a node to the end of the linked list", () => {
    const list = new LinkedList();
    list.append("first");
    expect(list.head.value).toBe("first");
  });

  it("Can successfully add multiple nodes to the end of a linked list", () => {
    const list = new LinkedList();
    list.append("first");
    list.append("second");
    list.append("third");
    expect(list.includes("second")).toBe(true);
    expect(list.includes("fourth")).toBe(false);
  });

  it("Can successfully insert a node before a node located in the middle of a linked list", () => {
    const list = new LinkedList();
    list.append("first");
    list.append("third");
    list.insertBefore("third", "second");
    expect(list.toString()).toBe("{first} -> {second} -> {third} -> null");
    expect(list.size).toBe(3);
  });

  it("Can successfully insert a node before the first node of a linked list", () => {
    const list = new LinkedList();
    list.append("second");
    list.append("third");
    list.insertBefore("second", "first");
    expect(list.toString()).toBe("{first} -> {second} -> {third} -> null");
    expect(list.size).toBe(3);
  });

  it("Can successfully insert after a node in the middle of the linked list", () => {
    const list = new LinkedList();
    list.append("first");
    list.append("third");
    list.insertAfter("first", "second");
    expect(list.toString()).toBe("{first} -> {second} -> {third} -> null");
    expect(list.size).toBe(3);
  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    const list = new LinkedList();
    list.append("first");
    list.append("second");
    list.insertAfter("second", "third");
    expect(list.toString()).toBe("{first} -> {second} -> {third} -> null");
    expect(list.size).toBe(3);
  });
});
