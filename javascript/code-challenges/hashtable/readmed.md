# Hash Tables 
Implement a Hashtable Class with the following methods:

## Methodes

- ### **set**
    **Arguments**: `key`, `value`

    **Returns**: Nothing

    This method hashes the `key` and sets the `key` and `value` pair in the table, handling collisions as needed. If a given `key` already exists in the table, it replaces its value with the `value` argument provided to this method.

- ### **get**
    **Arguments**: `key`

    **Returns**: Value associated with that key in the table

- ### **has**
    **Arguments**: `key`

    **Returns**: Boolean, indicating if the key exists in the table already.

-   ### **keys**
    **Returns**: Collection of keys

-   ### **hash**
    **Arguments**: `key`

    **Returns**: Index in the collection for that key

##Approach & Efficiency

### Time Complexity
- Hashtable Initialization: O(1)
- `hash(key)`: O(k) per key (k is the key length)
- `set(key, value)`: O(k) per key
- `get(key)`: O(k) per key
- `has(key)`: O(k) per key
- `keys()`: O(n) (n is the number of unique keys)

### Space Complexity
- Hashtable Initialization: O(n) (n is the hashtable size)
- `set(key, value)`: O(1) per key
- `get(key)`: O(1) per key
- `has(key)`: O(1) per key
- `keys()`: O(n) (space used for storing keys)

The code's performance depends on the number of unique keys and their average length, and the space complexity is influenced by the number of stored entries and the hashtable size.


----
## Code & Unit test 
[Code](./index.js)
[unitTest](./_test_/hashtable.test.js)