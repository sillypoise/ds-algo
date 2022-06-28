function S1_RunLengthEncoding(input: string): string {
    let encodedChars: string[] = [];
    let currLength = 1;

    for (let i = 1; i < input.length; i++) {
        let currChar = input[i];
        let prevChar = input[i - 1];

        if (currChar !== prevChar || currLength == 9) {
            encodedChars.push(currLength.toString());
            encodedChars.push(prevChar);
            currLength = 0;
        }

        currLength++;
    }
    encodedChars.push(currLength.toString());
    encodedChars.push(input[input.length - 1]);

    return encodedChars.join("");
}

S1_RunLengthEncoding("AAAAAAAAAAAAABBCCCCDD");
