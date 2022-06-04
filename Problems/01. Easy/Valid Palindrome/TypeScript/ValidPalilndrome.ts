import { describe, expect, it, test } from "vitest";

function ValidPalindrome(s: string): boolean {
    return true;
}

function S1_ValidPalindrome(s: string): boolean {
    // ⌚💾 O(n)
    let normS = normaliseString(s);
    if (!normS.length) return true;
    let leftP = 0;
    let rightP = normS.length - 1;
    // ⌚ O(n)
    while (leftP <= rightP) {
        if (normS[leftP] !== normS[rightP]) return false;
        leftP++;
        rightP--;
    }
    return true;
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
