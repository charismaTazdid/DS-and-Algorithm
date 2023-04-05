const arr = [2, 8, 5, 3, 9, 4, 1];

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }

    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}


console.log(quickSort(arr))


function quickSort2(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const pivot = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
    }
}

console.log(quickSort2(arr))