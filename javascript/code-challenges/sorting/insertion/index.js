function insert(sorted, value) {
    let i = 0;
    while (value > sorted[i]) {
        i++;
    }
    while (i < sorted.length) {
        let temp = sorted[i];
        sorted[i] = value;
        value = temp;
        i++;
    }
    sorted.push(value);
}

function insertionSort(input) {
    let sorted = [];
    sorted[0] = input[0];
    for (let i = 1; i < input.length; i++) {
        insert(sorted, input[i]);
    }
    return sorted;
}

let arrUnSort = [7, 3, 9, 2, 5];
const sortedArray = insertionSort(arrUnSort);
console.log("Unsorted Array:", arrUnSort);
console.log("Sorted Array:", sortedArray);
