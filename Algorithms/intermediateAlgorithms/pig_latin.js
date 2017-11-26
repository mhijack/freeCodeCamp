// Translate the provided string to pig latin.
//
//     Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//
//     If a word begins with a vowel you just add "way" to the end.
//
//     Input strings are guaranteed to be English words in all lowercase.

function translatePigLati(str) {
    if("aeiou".indexOf(str[0]) > -1) {
        return str + "way";
    } else {
        for(let i = 0; i < str.length; i++) {
            if("aeiou".indexOf(str[i]) > -1) {
                return str.substr(i) + str.substr(0, i) + "ay";
            }
        }
    }
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");