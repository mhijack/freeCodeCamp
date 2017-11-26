// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// function diffArray(arr1, arr2) {
//     var newArr = [];
//     // Same, same; but different.
//     for(let i = 0; i < arr1.length; i++) {
//         // (arr2.indexOf(arr1[i]) === - 1) ? newArray.push(arr1[i]) : ;
//         if(arr2.indexOf(arr[i]) === -1) {
//             newArray.push(arr1[i]);
//         }
//     }
//     return newArray.concat(diffArray(arr2, arr1));
// }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function diffArray(arr1, arr2) {
    var newArr = [];

    function includes(array1, array2) {
        for(let i = 0; i < array1.length; i++) {
            if(array2.includes(array1[i]) === false) {
                newArr.push(array1[i]);
            }
        }
    }

    includes(arr1, arr2);
    includes(arr2, arr1);
    return newArr;
}

function diffArray(arr1, arr2) {
    return (arr1.filter(item => !arr2.includes(item))).concat(arr2.filter(item => !arr1.includes(item)))
}