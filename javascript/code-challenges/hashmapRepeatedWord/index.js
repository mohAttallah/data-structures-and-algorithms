"use strict";
const Hashtable = require('./assest/hashTable.js');

function repeatedWord(str) {
    let count = 0;
    const maps = new Hashtable(100);
    str = str.trim();
    str = str.split(" ");
    for (const item of str) {
        count++;
        maps.set(item, count)
    }
    let arr = []
    maps.map.forEach((data, i) => {
        arr.push(data.values())
    })

    let longestIndex = 0;
    let maxlenght = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        const currLength = arr[i].length
        if (currLength > maxlenght) {
            maxLength = currLength;
            maxIndex = i;
        }
    }
    let reptedWord = Object.keys(arr[longestIndex][0]).pop();
    return reptedWord;
}


console.log(repeatedWord(" hello"))
module.exports = repeatedWord;
