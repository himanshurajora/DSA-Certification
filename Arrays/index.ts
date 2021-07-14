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
var i:number, j:number;
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// insert item into array
function insert(arr, n, k, item) {
    for (i = n - 1; i >= k; i--) {
        arr[i] = arr[i + 1];
    }
    arr[k] = item;
    n++;
}

// delete item from array
function deleteItem(arr, n, k) {
    for (i = k; i < n; i++) {
        arr[i] = arr[i + 1];
    }
    n--;
}

// sort array
function sort(arr, n) {
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// search item in array
function search(arr, n, item) {
    for (i = 0; i < n; i++) {
        if (arr[i] == item) {
            return i;
        }
    }
    return -1;
}

// Main
function main() {
    console.log(array);
    insert(array, 10, 5, 100);
    console.log(array);
    deleteItem(array, 10, 5);
    console.log(array);
    sort(array, 10);
    console.log(array);
    console.log(search(array, 10, 100));
}

main();




