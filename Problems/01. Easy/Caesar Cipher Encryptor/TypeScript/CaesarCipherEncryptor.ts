function CaesarCipherEncryptor(s: string, key: number): string {
    return "";
}

function S1_CaesarCipherEncryptor(s: string, key: number): string {
    let newLetters: string[] = [];
    let newKey = key % 26;

    for (let letter of s) {
        newLetters.push(S1_getNewLetter(letter, newKey));
    }
    return newLetters.join("");
}

function S1_getNewLetter(letter: string, key: number): string {
    let newLetterCode = letter.charCodeAt(0) + key;
    return newLetterCode <= 122
        ? String.fromCharCode(newLetterCode)
        : String.fromCharCode(96 + (newLetterCode % 122));
}

function S2_CaesarCipherEncryptor(s: string, key: number): string {
    let newLetters: string[] = [];
    let newKey = key % 26;
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    for (let letter of s) {
        newLetters.push(S2_getNewLetter(letter, newKey, alphabet));
    }
    return newLetters.join("");
}

function S2_getNewLetter(
    letter: string,
    key: number,
    alphabet: string[]
): string {
    let newLetterCode = alphabet.indexOf(letter) + key;
    return newLetterCode <= 25
        ? alphabet[newLetterCode]
        : alphabet[-1 + (newLetterCode % 25)];
}
