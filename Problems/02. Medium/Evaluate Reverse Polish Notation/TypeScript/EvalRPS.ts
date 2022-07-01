function EvalRPS(tokens: string[]): number {
    return -0;
}

function S1_EvalRPS(tokens: string[]): number {
    let stack: number[] = [];

    for (let token of tokens) {
        switch (token) {
            case "+":
                stack.push(stack.pop()! + stack.pop()!);
                break;
            case "-":
                let a = stack.pop()!;
                let b = stack.pop()!;
                stack.push(b - a);
                break;
            case "*":
                stack.push(stack.pop()! * stack.pop()!);
                break;
            case "/":
                let c = stack.pop()!;
                let d = stack.pop()!;
                stack.push(Math.trunc(d / c));
                break;
            default:
                stack.push(parseInt(token));
        }
    }

    return stack[0];
}

S1_EvalRPS(["2", "1", "+", "3", "*"]);
S1_EvalRPS([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
]);
