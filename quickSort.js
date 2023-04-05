
const myArray = [3, 6, 1, 9, 4, 2, 8, 7, 5];

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort(myArray))