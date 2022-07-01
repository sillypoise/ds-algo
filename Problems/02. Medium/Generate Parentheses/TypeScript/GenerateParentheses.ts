function GenerateParentheses(n: number): string[] {
    return [];
}

function S1_GenerateParentheses(n: number): string[] {
    let stack: string[] = [];
    let res: string[] = [];

    function backtrack(open: number, close: number) {
        if (open === n && close === n) {
            res.push(stack.join(""));
            return;
        }

        if (open < n) {
            stack.push("(");
            backtrack(open + 1, close);
            stack.pop();
        }

        if (close < open) {
            stack.push(")");
            backtrack(open, close + 1);
            stack.pop();
        }
    }

    backtrack(0, 0);
    return res;
}

S1_GenerateParentheses(3);
S1_GenerateParentheses(1);
