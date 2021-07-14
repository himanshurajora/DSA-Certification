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
function insert(arr: any[], n: number, k: number, item: any) {
    for (i = n - 1; i >= k; i--) {
        arr[i] = arr[i + 1];
    }
    arr[k] = item;
    n++;
}

// delete item from array
function deleteItem(arr: any[], n: number, k: number) {
    for (i = k; i < n; i++) {
        arr[i] = arr[i + 1];
    }
    n--;
}

// sort array
function sort(arr: any[], n: number) {
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
function search(arr: any[], n: number, item: any) {
    for (i = 0; i < n; i++) {
        if (arr[i] == item) {
            return i;
        }
    }
    return -1;
}

// Binary Search Function
function BinarySearch(arr: number[], key: number) {
    var low = 0;
    var high = arr.length - 1;

    while(low <= high){
        var mid = Math.floor((low + high)/2);
        console.log(mid);
        if(key === arr[mid]){
            return mid;
        }
        else if (key < arr[mid]){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return -1;
}

//Bubble sort
function BubbleSort(arr: number[]) {
    var swapped = true;
    for (let i = arr.length - 1; i >= 0; i--) {
        if(swapped){
            swapped = false;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                    swapped = true;
                }
            }
        }
        else{
            break;
        }
    }
}

function QuickSort(arr: number[]){
    console.log(arr)
    if(arr.length <= 1){
        return arr
    }

    var pivot = arr[arr.length - 1];
    var left:number[] = [], right :number[] = [];

    for (let i = 0; i < arr.length -1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }

    return [...QuickSort(left), pivot, ...QuickSort(right)]

}
