import { describe, expect, it, test } from "vitest";

function validAnagram(s: string, t: string): boolean {
    return false;
}

function S1_validAnagram(s: string, t: string): boolean {
    if (!s && !t) return true;
    if (s.length !== t.length || !s || !t) return false;
    // O(s log s)
    let sortedS = s.split("").sort();
    // O(t log t)
    let sortedT = t.split("").sort();
    // O(s + t)
    for (let i = 0; i < s.length && i < t.length; i++) {
        let pointerS = sortedS[i];
        let pointerT = sortedT[i];
        if (pointerS !== pointerT) return false;
    }
    return true;
}

function S2_validAnagram(s: string, t: string): boolean {
    if (!s && !t) return true;
    if (s.length !== t.length || !s || !t) return false;
    const hashS: Record<string, number> = {};
    const hashT: Record<string, number> = {};
    // O(s+t)
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
    // O(s+t)
    for (const key in hashS) {
        if (!(key in hashT)) return false;
        if (hashS[key] !== hashT[key]) return false;
    }
    return true;
}

function S3_validAnagram(s: string, t: string): boolean {
    if (s.split("").sort().toString() !== t.split("").sort().toString()) {
        return false;
    }
    return true;
}

validAnagram("lucky", "cuky");

test("Valid Anagram", () => {
    // expect(validAnagram("anagram", "nagaram")).toBe(true);
    // expect(validAnagram("lucky", "cuky")).toBe(false);
    // expect(validAnagram("", "dffe")).toBe(false);
    // expect(validAnagram("", "")).toBe(true);
    // expect(validAnagram("aang", "nasa")).toBe(false);
    // expect(validAnagram("aang", "naga")).toBe(true);
});
