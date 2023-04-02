
const arr = [2, 8, 5, 3, 9, 4, 1];

const selectionSortRecursive = (arr, n = arr.length) => {

    if (n <= 1) return arr;

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[n - 1]) {
            let temp = arr[i];
            arr[i] = arr[n - 1];
            arr[n - 1] = temp;
        }
    }
    selectionSortRecursive(arr, n - 1);

    return arr;
};

console.log(selectionSortRecursive(arr))  // Output: [1, 2, 3, 4, 5, 8, 9]