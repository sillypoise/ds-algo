function LongestSubstringNoRepeat(s: string): number {
    return -1;
}

function S1_LongestSubstringNoRepeat(s: string): number {
    let tempMax = 0;
    let maxLength = 0;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (map.get(char) >= tempMax) {
            tempMax = map.get(char) + 1;
        }

        map.set(char, i);
        maxLength = Math.max(maxLength, i - tempMax + 1);
    }

    return maxLength;
}

function S2_LongestSubstringNoRepeat(s: string): number {
    let tempMax = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = tempMax; j < i; j++) {
            if (s[i] === s[j]) {
                tempMax = j + 1;
                break;
            }
        }
        if (i - tempMax + 1 > maxLength) {
            maxLength = i - tempMax + 1;
        }
    }
    return maxLength;
}

S1_LongestSubstringNoRepeat("abcabcbb");
S2_LongestSubstringNoRepeat("abcabcbb");
S1_LongestSubstringNoRepeat("pwwkew");
S2_LongestSubstringNoRepeat("pwwkew");
