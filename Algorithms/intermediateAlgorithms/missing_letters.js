/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

function fearNotLetter(str) {
  // get charcode of index 0
  const code = str.charCodeAt(0);

  // loop through array (starting from index 1)
  for (let i = 1, n = str.length; i < n; i++) {
    // convert each letter into charcode
    if (str.charCodeAt(i) !== code + i) {
      return String.fromCharCode(code + i);
    }
  }

  return;
}

fearNotLetter('abce');

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("bcd") should return undefined.
// fearNotLetter("yz") should return undefined.
