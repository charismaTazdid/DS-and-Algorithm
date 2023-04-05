// Sort an Array [0, 1, 1, 1, 1, 0, 1, 0, 0 , 1] Element

const arr = [0, 1, 1, 1, 1, 0, 1, 0, 0, 1];  //Expected Output: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1]

const sorting = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0)
            count++;
    };
    for (let i = 0; i < count; i++) {
        arr[i] = 0;
    };
    for (let i = count; i < arr.length; i++) {
        arr[i] = 1;
    }
    return arr;
};

console.log(sorting(arr))