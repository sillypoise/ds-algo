function ValidPalindrome(s: string): boolean {
    let normS = normaliseString(s);
    if (!normS.length) return true;
    let leftP = 0;
    let rightP = normS.length - 1;
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
ValidPalindrome("ab_a");
