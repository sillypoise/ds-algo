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

function S1_LinkedListCycle(head: ListNode | null): boolean {
    let slowP = head;
    let fastP = head;

    while (fastP && fastP.next) {
        fastP = fastP.next.next;
        slowP = slowP ? slowP.next : null;
        if (slowP === fastP) {
            return true;
        }
    }
    return false;
}

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next;

S1_LinkedListCycle(head);
