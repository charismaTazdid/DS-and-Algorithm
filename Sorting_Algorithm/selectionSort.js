
const arr = [2, 8, 5, 3, 9, 4, 1];  // Expected Output: [1, 2, 3, 4, 5, 8, 9]

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        } 
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap value
        }
    }
    return arr;
}

console.log(selectionSort(arr))

// Time Complexity: O(n^2)
// Space Complexity: O(1)