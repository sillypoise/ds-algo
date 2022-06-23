interface ICompareFunction<T> {
    (a: T, b: T): number;
}
function defaultCompare<T>(a: T, b: T): number {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}
function reverseCompareFunction<T>(
    compareFunction?: ICompareFunction<T>
): ICompareFunction<T> {
    if (isUndefined(compareFunction) || !isFunction(compareFunction)) {
        return function (a, b) {
            if (a < b) {
                return 1;
            } else if (a === b) {
                return 0;
            } else {
                return -1;
            }
        };
    } else {
        return function (d: T, v: T) {
            return compareFunction(d, v) * -1;
        };
    }
}
function swap<T>(array: T[], i: number, j: number): boolean {
    if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
        return false;
    }
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return true;
}
function isUndefined(obj: any): obj is undefined {
    return typeof obj === "undefined";
}
function isFunction(func: any): boolean {
    return typeof func === "function";
}

class Heap<T> {
    private data: T[] = [];

    private compare: ICompareFunction<T>;

    constructor(compareFunction?: ICompareFunction<T>) {
        this.compare = compareFunction || defaultCompare;
    }

    private leftChildIndex(nodeIndex: number): number {
        return 2 * nodeIndex + 1;
    }

    private rightChildIndex(nodeIndex: number): number {
        return 2 * nodeIndex + 2;
    }

    private parentIndex(nodeIndex: number): number {
        return Math.floor((nodeIndex - 1) / 2);
    }

    private minIndex(leftChild: number, rightChild: number): number {
        if (rightChild >= this.data.length) {
            if (leftChild >= this.data.length) {
                return -1;
            } else {
                return leftChild;
            }
        } else {
            if (
                this.compare(this.data[leftChild], this.data[rightChild]) <= 0
            ) {
                return leftChild;
            } else {
                return rightChild;
            }
        }
    }

    private siftUp(index: number): void {
        let parent = this.parentIndex(index);
        while (
            index > 0 &&
            this.compare(this.data[parent], this.data[index]) > 0
        ) {
            swap(this.data, parent, index);
            index = parent;
            parent = this.parentIndex(index);
        }
    }

    private siftDown(index: number): void {
        //smaller child index
        let min = this.minIndex(
            this.leftChildIndex(index),
            this.rightChildIndex(index)
        );

        while (min >= 0 && this.compare(this.data[index], this.data[min]) > 0) {
            swap(this.data, min, index);
            index = min;
            min = this.minIndex(
                this.leftChildIndex(index),
                this.rightChildIndex(index)
            );
        }
    }
    peek(): T | undefined {
        if (this.data.length > 0) {
            return this.data[0];
        } else {
            return undefined;
        }
    }
    heapify(array: T[]) {
        if (array) {
            this.data = array;
        }

        let firstParentIndex = Math.floor((this.size() - 2) / 2);

        for (let i = firstParentIndex; i >= 0; i--) {
            this.siftDown(i);
        }
        return this.data;
    }
    add(element: T): boolean {
        if (isUndefined(element)) {
            return false;
        }
        this.data.push(element);
        this.siftUp(this.data.length - 1);
        return true;
    }
    removeRoot(): T | undefined {
        if (this.data.length > 0) {
            const obj = this.data[0];
            this.data[0] = this.data[this.data.length - 1];
            this.data.splice(this.data.length - 1, 1);
            if (this.data.length > 0) {
                this.siftDown(0);
            }
            return obj;
        }
        return undefined;
    }
    size(): number {
        return this.data.length;
    }
    isEmpty(): boolean {
        return this.data.length <= 0;
    }
}

function S1_LastStoneWeight(stones: number[]): number {
    let heap = new Heap<number>(reverseCompareFunction(defaultCompare));
    heap.heapify(stones);

    while (stones.length > 1) {
        let first = heap.removeRoot();
        let second = heap.removeRoot();

        if (second && first) {
            if (second < first) {
                heap.add(first - second);
            }
        }
    }
    return stones[0] ? stones[0] : 0;
}

S1_LastStoneWeight([2, 2]);
