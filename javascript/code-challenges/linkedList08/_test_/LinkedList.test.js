const LinkedList = require("../LinkedList");

describe("zipLists", () => {
    it("should zip two linked lists together", () => {
        const list1 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(2);

        const list2 = new LinkedList();
        list2.append(5);
        list2.append(9);
        list2.append(4);

        let zippedList = new LinkedList();
        zippedList = zippedList.zipLists(list1, list2);
        
        expect(zippedList.toString()).toBe("{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null");
        expect(zippedList.size).toBe(6);
    });
})
