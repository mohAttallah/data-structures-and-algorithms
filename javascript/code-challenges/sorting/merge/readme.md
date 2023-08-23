## Insertion Sort 

---

Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.


### Pseudocode

```js

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

```

### Trace
**Sample Arrays :** [8,4,23,42,16,15]


### Trace for Merge Sort
**Sample Array:** [8, 4, 23, 42, 16, 15]



- **Step 1 (Split):**
  - Split the array into halves:
    - Left: [8, 4, 23]
    - Right: [42, 16, 15]

- **Step 2 (Split):**
  - Split the left array into halves:
    - Left: [8]
    - Right: [4, 23]

- **Step 3 (Merge):**
  - Merge the two halves of the left array:
    - Merged Left: [4, 8, 23]

- **Step 4 (Split):**
  - Split the right array into halves:
    - Left: [42]
    - Right: [16, 15]

- **Step 5 (Merge):**
  - Merge the two halves of the right array:
    - Merged Right: [15, 16, 42]

- **Step 6 (Merge):**
  - Merge the two merged halves (left and right):
    - Merged Left: [4, 8, 15, 16, 23, 42]

**The sorted array now: [4, 8, 15, 16, 23, 42]**






### Efficency

*Space Complexity*: **O(n)**, where 'n' is the number of elements in the array

*Time Complexity*:**O(n log n)**, n represents the number of elements in the input array or list that you are sorting


### JS Code
[Code](./index.js)