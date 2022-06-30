function Encode(strs: string[]): string {
    return "";
}

function Decode(str: string): string[] {
    return [];
}

function S1_Encode(strs: string[]): string {
    let res = "";
    for (let str of strs) {
        res += str.length + "#" + str;
    }
    return res;
}

function S2_Decode(str: string): string[] {
    let res: string[] = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        while (str[j] !== "#") {
            j++;
        }
        let length = Number(str.slice(i, j));
        let word = str.slice(j + 1, j + 1 + length);
        res.push(word);
        i = j + 1 + length;
    }
    return res;
}

let test = S1_Encode(["hey", "jude"]);
S2_Decode(test);

export {};
