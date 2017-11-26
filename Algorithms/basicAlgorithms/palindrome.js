// Return true if the given string is a palindrome. Otherwise, return false.
//
//     A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
//
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
//
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
    let front = 0;
    let back = str.length - 1;

    while(back > front) {
        while(str[front].match(/[\W_]/)) {
            front++;
            // continue;
        }

        while(str[back].match(/[\W_]/)) {
            back--;
            // continue;
        }

        if(str[front].toLowerCase() !== str[back].toLowerCase()) {
            return false;
        }

        front++;
        back--;
    }
    return true;
}

document.write(console.log(palindrome("almostomla")));
// break and continue usually are used to skip/ignore codes; thus,
// often there WILL BE code blocks under neath these two statements.

// in our case,continue is not needed because when while evaluates to true,
// we jump back to the next iteration in the loop anyway.