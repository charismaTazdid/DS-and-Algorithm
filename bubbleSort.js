
const arr = [3, 2, 5, 1, 6, 7, 4, 8];  // expected output: [1, 2, 3 , 4, 5, 6, 7, 8] 

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
};

console.log(bubbleSort(arr));