'use strict'
class Node {
    constructor(value, cheldren = []) {
        this.value = value;
        this.children = cheldren;
        this.parent = null;
    }

}

module.exports = Node;