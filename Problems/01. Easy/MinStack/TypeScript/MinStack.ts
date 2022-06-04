import { describe, expect, it, test, vi } from "vitest";

class MinStack {}

class S1_MinStack {
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

// describe("Min Stack Implementation", () => {
//     test("Push method", () => {
//         let s = new MinStack();
//         s.push(43);
//         expect(s.stack).toEqual([43]);
//         s.push(13);
//         s.push(5);
//         expect(s.stack).toEqual([43, 13, 5]);
//     });
//     test("Pop method", () => {
//         let s = new MinStack();
//         s.push(43);
//         s.push(13);
//         s.push(5);
//         s.pop();
//         expect(s.stack).toEqual([43, 13]);
//     });
//     test("top method", () => {
//         let s = new MinStack();
//         // You need a mock/spy here, need to learn how to do it
//         s.push(43);
//         s.push(13);
//         s.push(5);
//         let topResult = s.top();
//         expect(topResult).toBe(5);
//     });
//     test("getMin method", () => {
//         let s = new MinStack();
//         s.push(43);
//         s.push(2);
//         s.push(13);
//         s.push(5);
//         let result = s.getMin();
//         expect(result).toBe(2);
//     });
// });
