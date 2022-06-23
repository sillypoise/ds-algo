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
