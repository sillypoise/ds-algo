interface ListNode {
    val: number;
    next: ListNode | null;
}

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = !val ? 0 : val;
        this.next = !next ? null : next;
    }
}

function ReverseLinkedList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

let s = new ListNode(4);
let t = new ListNode(10, s);
let v = new ListNode(15, t);

ReverseLinkedList(v);
