function validAnagram(s: string, t: string): boolean {
    if (!s && !t) return true;
    if (s.length !== t.length || !s || !t) return false;
    const hashS: Record<string, number> = {};
    const hashT: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (charS in hashS) {
            hashS[charS] = hashS[charS] + 1;
        } else {
            hashS[charS] = 1;
        }

        if (charT in hashT) {
            hashT[charT] = hashT[charT] + 1;
        } else {
            hashT[charT] = 1;
        }
    }
    for (const key in hashS) {
        if (!(key in hashT)) return false;
        if (hashS[key] !== hashT[key]) return false;
    }
    return true;
}

validAnagram("aang", "nasa");
