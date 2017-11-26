// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//
//     Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
//     Return the provided character as the first element in each array.
//
//     For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// function pairElement(str) {
//     const arr = [];
//
//     for(let i = 0; i < str.length; i++) {
//         arr.push([str[i], pair(str[i])]);
//     }
//     function pair(n) {
//         switch(n) {
//             case "A":
//                 return "T";
//             case "T":
//                 return "A";
//             case "C":
//                 return "G";
//             case "G":
//                 return "C"
//         }
//     }
//     return arr;
// }

function pairElement(str) {
    const map = {C: "G", G: "C", T: "A", A: "T"};
    const strArr = str.split("");
    for(item in strArr) {
        strArr[item] = [str[item], map[str[item]]]
    }
    return strArr
}

pairElement("GCG");


pairElement("ATCGA"); //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG"); //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA"); //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]