function ValidParenentheses(s: string): boolean {
    if (s.length <= 1) return false;
    let stack: string[] = new Array();
    const bracketType: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    // if (s[0] in bracketType) return false;
    for (let char of s) {
        if (char in bracketType) {
            if (stack.length && stack[stack.length - 1] == bracketType[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return !stack.length;
}

ValidParenentheses("({[]})");
ValidParenentheses("(}[)");
ValidParenentheses("()[]{}");
ValidParenentheses("()");
ValidParenentheses("([}])");
