function PermutationInString(s1: string, s2: string): boolean {
    return false;
}

function S1_PermutationInString(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    let map: Record<string, number> = {};
    let window: Record<string, number> = {};

    let left = 0;
    let right = 0;

    for (let char of s1) {
        map[char] = map[char] + 1 || 1;
    }

    while (right < s2.length) {
        let curr = s2[right];
        window[curr] = window[curr] + 1 || 1;

        while (window[curr] > (map[curr] || 0)) {
            window[s2[left]]--;
            left++;
        }

        if (right - left + 1 === s1.length) return true;

        right++;
    }

    return false;
}

function S2_PermutationInString(s1: string, s2: string): boolean {
    let freq = Array(26).fill(0);
    let left = 0;
    let right = s1.length;

    if (s1.length > s2.length) return false;

    for (let i = 0; i < s1.length; i++) {
        freq[s1.charCodeAt(i) - 97]++;
        freq[s2.charCodeAt(i) - 97]--;
    }

    while (left < s2.length) {
        if (freq.every((val) => val === 0)) return true;

        freq[s2.charCodeAt(left++) - 97]++;
        freq[s2.charCodeAt(right++) - 97]--;
    }

    return false;
}

S1_PermutationInString("ab", "eibaooo");
