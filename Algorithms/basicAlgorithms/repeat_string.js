// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.


// function repeatStringNumTimes(str, num) {
//     // repeat after me
//     let result = "";
//     if(num < 0) {
//         return "";
//     } else {
//         for(let i = 0; i < num; i++) {
//             result += str;
//         }
//     }
//     return result;
// }

function repeatStringNumTimes(str, num) {
    return num < 0 ? "" : str.repeat(num);
}

document.write(repeatStringNumTimes("abc", 3));
