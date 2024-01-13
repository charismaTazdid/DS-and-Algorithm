function towPointerAlgo(arr, target) {
    let starter = 0;
    let end = arr.length - 1;

    while (starter < end) {
        let sum = arr[starter] + arr[end];
        if (sum === target) {
            return `${sum} got by adding ${arr[starter]} and ${arr[end]}`;
        } else if (sum < target) {
            starter = starter + 1;
        } else {
            end = end - 1;
        }
    }
    return "No pair found";
};
// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const target = 3;
console.log(towPointerAlgo(arr, target));