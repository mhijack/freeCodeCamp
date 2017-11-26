// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// //
// // For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    let result = arr.map(function(item) {
        return item.replace(item[0], item[0].toUpperCase());
    });
    return result.join(" ");
};

document.write(titleCase("I'm a little tea pot"));
document.write(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));