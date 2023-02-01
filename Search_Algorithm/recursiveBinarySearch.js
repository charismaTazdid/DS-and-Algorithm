
const recursiveBinarySearch = (arr, target, first = 0, last = arr.length - 1) => {

    if (first > last)
        return -1;

    let middle = Math.round((first + last) / 2);
    if (arr[middle] === target) {
        return middle;
    }
    else if (arr[middle] > target) {
        return recursiveBinarySearch(arr, target, first, last = middle - 1)
    }
    else {
        return recursiveBinarySearch(arr, target, first = middle + 1, last)
    }
};


const arr = [-2, 4, 5, 34, 65, 76, 345, 387, 456, 998, 999];

console.log(recursiveBinarySearch(arr, 76)) // Expected Output: 5
console.log(recursiveBinarySearch(arr, 5)) // Expected Output: 2
console.log(recursiveBinarySearch(arr, 777)) // Expected Output: -1

// Complexity: O(log n)