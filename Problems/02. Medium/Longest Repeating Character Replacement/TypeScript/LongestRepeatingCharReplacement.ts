function LongestRepeatingCharReplacement(s: string, k: number): number {
    return 0;
}

function S1_LongestRepeatingCharReplacement(s: string, k: number): number {
    let count: Map<string, number> = new Map();
    let res = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (!count.get(s[right])) count.set(s[right], 0);
        count.set(s[right], 1 + count.get(s[right])!);

        while (right - left + 1 - Math.max(...count.values()) > k) {
            count.set(s[left], count.get(s[left])! - 1);
            left++;
        }

        res = Math.max(res, right - left + 1);
    }
    return res;
}

function S2_LongestRepeatingCharReplacement(s: string, k: number): number {
    let count: Map<string, number> = new Map();
    let res = 0;
    let left = 0;
    let maxFreq = 0;

    for (let right = 0; right < s.length; right++) {
        if (!count.get(s[right])) count.set(s[right], 0);
        count.set(s[right], 1 + count.get(s[right])!);
        maxFreq = Math.max(maxFreq, count.get(s[right])!);

        while (right - left + 1 - maxFreq > k) {
            count.set(s[left], count.get(s[left])! - 1);
            left++;
        }

        res = Math.max(res, right - left + 1);
    }
    return res;
}

S1_LongestRepeatingCharReplacement("ABAB", 2);
S1_LongestRepeatingCharReplacement("AABABBA", 1);
S2_LongestRepeatingCharReplacement("ABAB", 2);
S2_LongestRepeatingCharReplacement("AABABBA", 1);
