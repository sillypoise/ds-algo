function ValidateSubsequence(seq: number[], sub: number[]): boolean {
    return false;
}

function S1_ValidateSubsequence(seq: number[], sub: number[]): boolean {
    let i = 0;
    let j = 0;

    while (i < seq.length && j < sub.length) {
        if (seq[i] === sub[i]) j++;
        i++;
    }

    return j === sub.length;
}

function S2_ValidateSubsequence(seq: number[], sub: number[]): boolean {
    let i = 0;

    for (let value of seq) {
        if (i === sub.length) break;
        if (sub[i] === value) i++;
    }

    return i === sub.length;
}
