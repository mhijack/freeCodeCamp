// Return the length of the longest word in the provided sentence.
//
//     Your response should be a number.

// function findLongestWord(str) {
//     let array = str.split(" ");
//     let length = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].length > length) {
//             length = array[i].length;
//         }
//     }
//     return length;
// }

// with .reduce()
function findLongestWord(str) {
    return str.split(" ").reduce(function(x, y) {
        return Math.max(x, y.length);
    }, 0);
}

document.write(findLongestWord("The quick brown fox jumped over the lazy dog"));