const arr = [2, 8, 5, 3, 9, 4, 1];

const selectionSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }
    return arr;

}

console.log(selectionSort(arr))