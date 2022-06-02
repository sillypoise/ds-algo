function ValidParenentheses(s: string): boolean {
    return;
}

function S1_ValidParenentheses(s: string): boolean {
    if (s.length <= 1) return false;
    let stack: string[] = new Array();
    let bracketType = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    if (s[0] in bracketType) return false;
    for (let char of s) {
        if (char in bracketType) {
            if (bracketType[char] !== stack[stack.length - 1]) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return !stack.length;
}
