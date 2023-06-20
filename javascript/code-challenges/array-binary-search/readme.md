# Insert and Shift Array

## Challenge

function called 'BinarySearch' which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard Process

![whiteboard ](binary-Search.jpg)

## Approach and Efficiency

1- Initialize start and end as the first and last indices of the array.

2- Enter a loop while the start index is less than or equal to the end index.

3- Calculate the middle index as the average of start and end.

4- If the element at the middle index is equal to the key, return the middle index.

5- If the element at the middle index is greater than the key, update the end index to search in the left half.

6- If the element at the middle index is less than the key, update the start index to search in the right half.

7- If the key element is not found, return -1 to indicate it was not found.

## Solution

```javascript
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
```

### Example

```javascript
const arr = [4, 8, 15, 16, 23, 42];
const key = 15;

console.log(binarySearch(arr, key));
// Output: [2, 4, 5, 6, -8]
```
