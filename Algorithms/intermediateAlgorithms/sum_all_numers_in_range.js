// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
// The lowest number will not always come first.


// I thought too complex;
function sumAll(arr) {
    // get max & min;
    // create newArray containing al numbers counting from min to max;
    // .reduce() to get final answer;
    //     const min = Math.min(arr);
    //     const max = Math.max(arr);
    //     const newArray = [];
    //     for(let i = min; i <= max; i++) {
    //         newArray.push(i);
    //     }
    //     return newArray.reduce((cur, next) => cur + next);
    let sum = 0;
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}
// need to use "...arr" instead of "arr" directly because Math.min does not support
// the insertion of an actual array.
// before "spread operator", need to use .reduce(), or .apply("this"'s context, argument) to do this.

sumAll([1, 4]);
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.