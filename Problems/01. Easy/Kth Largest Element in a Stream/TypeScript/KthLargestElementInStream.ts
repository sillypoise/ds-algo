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

class KthLargestElementInStream {
    heap: Heap<number>;
    constructor(public k: number, public nums: number[]) {
        this.heap = new Heap<number>();
        this.heap.heapify(nums);
        this.k = k;
        while (this.heap.size() > k) {
            this.heap.removeRoot();
        }
    }

    add(val: number): number {
        this.heap.add(val);
        if (this.heap.size() > this.k) {
            this.heap.removeRoot();
        }
        let res = this.heap.peek();

        return res ? res : 0;
    }
}
