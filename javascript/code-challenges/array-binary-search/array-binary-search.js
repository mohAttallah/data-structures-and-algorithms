// return the index key or -1 if not found the index

function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
    
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  // not found
  return -1;
}

const arr = [4, 8, 15, 16, 23, 42];
const key = 15;

console.log(binarySearch(arr, key)); 

// time complixity O(log n)