import { describe, expect, it, test } from "vitest";

function ValidPalindrome(s: string): boolean {
    return true;
}

function S1_ValidPalindrome(s: string): boolean {
    // ⌚💾 O(n)
    let norm = normaliseString(s);
    if (!norm.length) return true;
    let leftP = 0;
    let rightP = norm.length - 1;
    // ⌚ O(n)
    while (leftP <= rightP) {
        if (norm[leftP] !== norm[rightP]) return false;
        leftP++;
        rightP--;
    }
    return true;
}

function S2_ValidPalindrome(s: string): boolean {
    const reversedChars: string[] = [];
    for (let i = s.length - 1; i >= 0; i--) {
        reversedChars.push(s[i]);
    }
    return s === reversedChars.join("");
}

//  HELPERS
function normaliseString(s: string): string {
    return s.replace(/[^a-z0-9]/gi, "").toLowerCase();
}

describe("Valid Palindrome", () => {
    test("Valid Palidnrome", () => {
        return;
    });
});
