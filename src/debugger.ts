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

function S2_ReorderList(head: ListNode | null): void {
    let slow = head;
    let fast = head && head.next;

    while (fast && fast.next) {
        slow = slow && slow.next;
        fast = fast.next.next;
    }

    let second = slow && slow.next;
    if (slow) slow.next = null;
    let prev: ListNode | null = null;

    while (second) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }

    let first = head;
    second = prev;

    while (second) {
        let temp1 = first && first.next;
        let temp2 = second.next;
        if (first) first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
}

let t = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null,
            },
        },
    },
};

S2_ReorderList(t);
