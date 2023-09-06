'use strict';
const hashMap = require('./assests/hashMap')
const BT = require("./assests/binaryTree");

function tree_intersection(tree1, tree2) {
    let count = 0;
    const makeHash = new hashMap(1000);

    // treverse trees
    const itemsTree1 = tree1.postOrder();
    const itemsTree2 = tree2.postOrder();
    //set on hash map 
    itemsTree1.forEach(element => {
        count++;
        makeHash.set(`${element}`, count);
    });
    itemsTree2.forEach(element => {
        count++;
        // makeHash.get(element)
        makeHash.set(`${element}`, count);
    });

    const result = [];
    makeHash.map.forEach((data, i) => {
        
        if (data.values().length > 1) {
            data = Object.keys(data.values().pop())
            result.push(parseInt(...data))
        } 
    })
    return result;
}



const tree1 = new BT();
tree1.insert(10);
tree1.insert(20);
tree1.insert(30);
tree1.insert(75);
tree1.insert(160);



const tree2 = new BT();

tree2.insert(10);
tree2.insert(5);
tree2.insert(30);
tree2.insert(2);
tree2.insert(7);
tree2.insert(12);
tree2.insert(20);

console.log(tree_intersection(tree1, tree2))


module.exports = tree_intersection;