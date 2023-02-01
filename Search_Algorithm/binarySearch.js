//Binary Search Algorithm

const binarySearch = (arr, target) => {
    let first = 0;
    let last = arr.length - 1;

    while (first <= last) {
        let middle = Math.round((first + last) / 2);

        if (arr[middle] === target)
            return middle;
        else if (arr[middle] > target) {
            last = middle - 1;
        }
        else {
            first = middle + 1;
        }
    };
    return -1;
};

const arr = [-2, 4, 5, 34, 65, 76, 345, 387, 456, 998, 999];

console.log(binarySearch(arr, 998)); //Expected Output: 9
console.log(binarySearch(arr, 34));  //Expected Output: 3
console.log(binarySearch(arr, 37));  //Expected Output: -1

// Complexity : O(log n)

const target = 345;
console.log(`The Target at Position ${binarySearch(arr, target)}`)
