// array with 10 numbers 
// 1d array
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// array methods 
/*
Traverse
Insert
Delete
Sort
Search 
*/

// traverse trough array
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

/**
 * 
 * 
 * 
 */
function insert(arr, n, k, item) {
    for (i = n - 1; i >= k; i--) {
        arr[i] = arr[i + 1];
    }
    arr[k] = item;
    n++;
}



