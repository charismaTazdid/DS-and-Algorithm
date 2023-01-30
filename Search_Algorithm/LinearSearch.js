/* Given an array arr[] of N elements,
 the task is to write a function to 
 search a given element x in array.
 If x is not present in arr return -1,
 if x Found in the Array return the index of x
 */

const recursiveLinearSearch = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
};

const givenArray = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
console.log(recursiveLinearSearch(givenArray, 110)) //expected output: 6
console.log(recursiveLinearSearch(givenArray, 30)) //expected output: 3
console.log(recursiveLinearSearch(givenArray, 220)) //expected output: -1

//complexity: O(n).