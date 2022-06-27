class Node {
    prev: Node | null;
    next: Node | null;
    constructor(public val: number) {
        (this.val = val), (this.prev = null);
        this.next = null;
    }
}

class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertBefore(node: Node, nodeToInsert: Node) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;

        this.remove(nodeToInsert);
        nodeToInsert.next = node;
        nodeToInsert.prev = node.prev;

        if (node.prev === null) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }

    insertAfter(node: Node, nodeToInsert: Node) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;

        this.remove(nodeToInsert);
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;

        if (node.next === null) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = node;
        }
        node.next = nodeToInsert;
    }
    insertAt(nodeToInsert: Node, position: number) {
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let node = this.head;
        let currPos = 1;

        while (node && currPos !== position) {
            node = node.next;
            currPos++;
        }
        if (node !== null) {
            this.insertBefore(node, nodeToInsert);
        } else {
            this.setTail(nodeToInsert);
        }
    }
    setHead(node: Node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head, node);
    }
    setTail(node: Node) {
        if (this.tail === null) {
            this.setHead(node);
            return;
        }
        this.insertAfter(this.tail, node);
    }
    contains(val: number): boolean {
        let node = this.head;
        while (node && node.val !== val) node = node.next;
        return node !== null;
    }
    removeValue(val: number) {
        let node = this.head;
        while (node) {
            const nodeToRemove = node;
            node = node.next;
            if (nodeToRemove.val === val) {
                this.remove(nodeToRemove);
            }
        }
    }
    remove(node: Node) {
        if (node === this.head) this.head = this.head.next;
        if (node === this.tail) this.tail = this.tail.prev;
        this.removeNodeBindings(node);
    }

    size(): number {
        let node = this.head;
        let currPos = 1;

        while (node !== null) {
            node = node.next;
            currPos++;
        }

        return currPos;
    }

    private removeNodeBindings(node: Node) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        node.prev = null;
        node.next = null;
    }
}

export {};
