function DailyTemperatures(temperatures: number[]): number[] {
    return [];
}

function S1_DailyTemperatures(temperatures: number[]): number[] {
    let res = Array(temperatures.length).fill(0);
    let stack: number[][] = [];

    for (let [i, t] of temperatures.entries()) {
        while (stack.length && t > stack[stack.length - 1][0]) {
            let [_, stackInd] = stack.pop()!;
            res[stackInd] = i - stackInd;
        }
        stack.push([t, i]);
    }
    return res;
}
