function insertShiftArray(arr, val) {
  let midIndex = (arr.length / 2);
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === midIndex) {
      newArray.push(val);
    }
    newArray.push(arr[i]);
  }

  return newArray;
}

console.log(insertShiftArray([2, 4, 6, -8], 5));
console.log(insertShiftArray([42, 8, 15, 23, 42], 16));
