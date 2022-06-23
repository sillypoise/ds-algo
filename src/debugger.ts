function S1_ValidateSubsequence(seq: number[], sub: number[]): boolean {
    let i = 0;
    let j = 0;

    while (i < seq.length && j < sub.length) {
        if (seq[i] === sub[i]) j++;
        i++;
    }

    return j === sub.length;
}

S1_ValidateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
