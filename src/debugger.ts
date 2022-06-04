class MinStack {
    constructor() {}

    stack: number[] = [];
    minStack: number[] = [];

    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length) {
            val = Math.min(val, this.minStack[this.minStack.length - 1]);
        }
        this.minStack.push(val);
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

let s = new MinStack();
s.push(43);
s.push(2);
s.push(13);
s.push(5);
