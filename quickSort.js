
const myArray = [3, 6, 1, 9, 4, 2, 8, 7, 5];

// sort array in Ascending order and 
// in this implementation last element of array consider as pivot
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
    };
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort(myArray))

// sort array in Descending Order and
// in this implementation the first element of array consider as pivot
const quickSort2 = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0]
    let rightArr = []
    let leftArr = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            rightArr.push(arr[i])
        }
        else {
            leftArr.push(arr[i])
        }
    }
    return [...quickSort2(rightArr), pivot, ...quickSort2(leftArr)]
}

console.log(quickSort2(myArray))