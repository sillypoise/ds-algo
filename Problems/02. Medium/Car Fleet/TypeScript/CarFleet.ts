function CarFleet(target: number, position: number[], speed: number[]): number {
    return 0;
}

function S1_CarFleet(
    target: number,
    position: number[],
    speed: number[]
): number {
    let pair = position.reduce<[number, number][]>((arr, _val, i) => {
        arr[i] = [position[i], speed[i]];
        return arr;
    }, []);
    let stack: number[] = [];

    pair.sort((a, b) => a[0] - b[0]);

    for (let i = pair.length - 1; i >= 0; i--) {
        let [p, s] = pair[i];
        stack.push((target - p) / s);

        if (
            stack.length >= 2 &&
            stack[stack.length - 1] <= stack[stack.length - 2]
        ) {
            stack.pop();
        }
    }
    return stack.length;
}

S1_CarFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
