const LinkedList = require("../LinkedList");

describe("Linked List", () => {

    it("kthFromEnd test ", () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        expect(list.kthFromEnd(0)).toEqual(5);
        expect(list.kthFromEnd(2)).toEqual(3);
        expect(list.kthFromEnd(6)).toEqual("Exception");
    })

});
