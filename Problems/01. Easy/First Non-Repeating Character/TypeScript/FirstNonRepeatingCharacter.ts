function FirstNonRepeatingCharacter(s: string): number {
    return -1;
}

function S1_FirstNonRepeatingCharacter(s: string): number {
    // TODO FIX
    for (let i = 0; i < s.length - 1; i++) {
        let foundDup = false;

        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                foundDup = true;
            }
        }

        if (!foundDup) return i;
    }
    return -1;
}

function S2_FirstNonRepeatingCharacter(s: string): number {
    let freq: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]]) {
            freq[s[i]]++;
        } else {
            freq[s[i]] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) return i;
    }

    return -1;
}
