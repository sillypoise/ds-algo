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

S2_FirstNonRepeatingCharacter("loveleetcode");
S2_FirstNonRepeatingCharacter("aabb");
